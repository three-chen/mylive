export default class EventEmitter {
    public static listeners: Map<string, Array<Function>> = new Map();
    /**
     * 监听事件
     * @param event 事件名
     * @param listener 监听函数
     */
    public static on(event: string, listener: Function) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(listener);
    }
    /**
     * 触发事件
     * @param event 事件名
     * @param args 参数
     */
    public static emit(event: string, ...args: any[]) {
        if (this.listeners.has(event)) {
            const events = this.listeners.get(event);
            events.forEach(listener => listener(...args));
        }
    }
}