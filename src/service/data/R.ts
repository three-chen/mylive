export default class R<T>{
    private data: T;
    private code: number;


    constructor(data: T);
    constructor(data: T, code: number);
    constructor(data: T, code?: number) {
        this.data = data;
        if (code !== undefined) {
            this.code = code;
        } else {
            this.code = null as any;
        }
    }

    // 可选的静态方法来创建一个成功的响应
    static success<T>(data: T): R<T> {
        return new R(data);
    }

    // 可选的静态方法来创建一个失败的响应
    static error<T>(message: string, code: number = 500) {
        return new R(message, code);
    }

    // 获取响应的数据
    getData(): T | null {
        return this.data;
    }

    // 获取响应的状态码
    getCode(): number {
        return this.code;
    }
}