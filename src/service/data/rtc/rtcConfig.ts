interface rtcConfig {
    // 房间名
    roomAlias?: string,
    // 用户名
    userName?: string,
    // 本地视频元素、本地聊天元素
    localVideoBox?: HTMLDivElement
    localChatBox?: HTMLDivElement
}

export type {
    rtcConfig
}