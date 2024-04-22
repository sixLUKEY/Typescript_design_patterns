class Logger {
    static instance: Logger
    private logs: string[]

    constructor(){
        this.logs = []
        if(Logger.instance){
            return Logger.instance
        }
        Logger.instance = this
    }

    read(readable: string): void{
        console.log(readable)
        this.logs.push(readable)
    }

    showLogs(): void {
        console.log(this.logs)
    }
}

export const messageLogger = new Logger()