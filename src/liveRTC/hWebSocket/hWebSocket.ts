import type RoomSocketEvent from "@/service/data/RoomSocketEvent";

// websocket with heart beat
class HWebSocket {
    public ws: WebSocket;
    // 心跳间隔 55 秒
    private heartBeatInterval: number;
    // timeout 标识
    private timeout: number | null = null;

    constructor(url: string, heartBeatI: number = 55 * 1000) {
        this.ws = new WebSocket(url);
        this.heartBeatInterval = heartBeatI;
        this.startHearBeat();
    }

    public startHearBeat() {
        const that = this;
        that.timeout = setTimeout(() => {
            that.sendHeartBeat();
        }, this.heartBeatInterval)
    }

    public sendHeartBeat() {
        const roomSocketEvent: RoomSocketEvent = {
            eventName: "__heart_beat",
            data: {
                message: "ping"
            },
        }
        return this.ws.send(JSON.stringify(roomSocketEvent));
    }

    public resetHeartBeat() {
        const that = this;
        clearTimeout(that.timeout!)
        that.timeout = setTimeout(() => {
            that.startHearBeat()
        }, that.heartBeatInterval)
    }

    public clear() {
        const that = this;
        clearTimeout(that.timeout!)
        that.ws.close();
    }
}

export default HWebSocket;