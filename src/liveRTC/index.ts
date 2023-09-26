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
  private localPeerConn: any = null
  //保存所有与本地相连的peer connection， 键为socket id，值为PeerConnection类型
  private peerConnections: Map<string, any> = new Map()
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
   * @param
   * wsUrl : websocket url
   * room : room id
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

  public handleMessage(message: string) {
    console.log(message)
  }

  public async handleJoined(roomA: string, mySocketId: string, connSocketIds: string[]) {
    console.log(roomA, mySocketId, connSocketIds)

    const that = this
    that.roomAlias = roomA
    that.socketId = mySocketId
    that.connSocketIds = connSocketIds
    that.localPeerConn = new RTCPeerConnection(configuration)
    const offer: RTCSessionDescription = await that.localPeerConn.createOffer()
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
