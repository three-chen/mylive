import EventEmitter from './EventEmitter'

import type RoomSocketEvent from '@/service/data/RoomSocketEvent'

import { configuration } from '@/constants'
import { getObjectValues } from '@/utils'

const PeerConnection = window.RTCPeerConnection
const IceCandidate = window.RTCIceCandidate
const SessionDescription = window.RTCSessionDescription
const RemoteStream = new MediaStream()

class LiveRTC extends EventEmitter {
  // 房间名
  private roomAlias: string = ''
  private socket: WebSocket | null = null
  private localPeerConn: RTCPeerConnection | null = null
  //保存所有与本地相连的peer connection， 键为socket id，值为PeerConnection类型
  private peerConnections: Map<string, RTCPeerConnection> = new Map()
  // 保存本地socketId和所有对方的socketId
  private socketId: string = ''
  private connSocketIds: string[] = []

  public constructor() {
    super()
    // 将EventEmiiter调用的this指定为LiveRTC的this
    this.LiveRTCenv = this
    this.init()
  }

  public init() {
    this.on('message', this.handleMessage)
    this.on('_joined', this.handleJoined)
    this.on('_new_peer', this.handleNewPeer)
  }

  /**
   * @param wsUrl : websocket url
   *
   */
  connect(wsUrl: string) {
    const that = this
    that.socket = new WebSocket(wsUrl)
    that.socket.onopen = () => {
      console.log('websocket connected')
      const roomSocketEvent: RoomSocketEvent = {
        eventName: '__joinRoom',
        data: {
          roomAlias: 'roomTest',
          userName: 'userTest'
        }
      }
      that.socket!.send(JSON.stringify(roomSocketEvent))
    }

    that.socket.onmessage = (e) => {
      const roomSocketEvent: RoomSocketEvent = JSON.parse(e.data)
      that.emit(roomSocketEvent.eventName, getObjectValues(roomSocketEvent.data))
    }

    that.socket.onclose = () => {
      console.log('websocket closed')
    }
  }

  public attachStream(videoEl: HTMLVideoElement) {
    this.localPeerConn!.ontrack = async (event: any) => {
      console.log('ontrack steams', event.streams)

      const [remoteStream] = event.streams
      videoEl.srcObject = remoteStream
    }
  }

  public createPeerConnection(): RTCPeerConnection {
    const that = this
    const pc = new PeerConnection(configuration)
    pc.onicecandidate = (event: any) => {
      if (event.candidate) {
        const roomSocketEvent: RoomSocketEvent = {
          eventName: '__ice_candidate',
          data: {
            socketId: that.socketId,
            candidate: event.candidate
          }
        }
        that.socket!.send(JSON.stringify(roomSocketEvent))
      }
    }
    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'connected') {
        console.log('connected')
      }
    }
    return pc
  }

  public createLocalPeerConnection(): RTCPeerConnection {
    const that = this

    return that.createPeerConnection()
  }

  public createRemotePeerConnections(socketIds: string[]): Map<string, RTCPeerConnection> {
    const that = this
    const pcs: Map<string, RTCPeerConnection> = new Map()
    for (const socketId of socketIds) {
      const pc = that.createPeerConnection()
      pcs.set(socketId, pc)
    }
    return pcs
  }

  public handleMessage(message: string) {
    console.log(message)
  }

  public async handleJoined(roomA: string, mySocketId: string, connSocketIds: string[]) {
    console.log(roomA, mySocketId, connSocketIds)

    const that = this
    that.roomAlias = roomA
    that.socketId = mySocketId
    that.connSocketIds = connSocketIds
    that.localPeerConn = that.createLocalPeerConnection()
    that.peerConnections = that.createRemotePeerConnections(that.connSocketIds)

    const offer: RTCSessionDescriptionInit = await that.localPeerConn.createOffer()
    await that.localPeerConn.setLocalDescription(offer)
    const roomSocketEvent: RoomSocketEvent = {
      eventName: '__offer',
      data: {
        offer: offer
      }
    }

    that.socket!.send(JSON.stringify(roomSocketEvent))
  }

  public handleNewPeer(socketId: string) {
    const that = this
    that.connSocketIds.push(socketId)
  }
}

export default LiveRTC
