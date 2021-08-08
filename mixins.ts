function myLogFunction() {
    return (str: string) => {
        console.log(str)
    }
}

const logger =  myLogFunction()
logger("your string")

function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog: string = ""
        log(str: string) {
            console.log(str)
            this.completeLog += str + "\n"
        }
        dumpLog() {
            return this.completeLog
        }
    }
}

// @ts-ignore
const MyLogger = new createLoggerClass()
const logger2 = new MyLogger()
logger2.log("test")
console.log(logger2.dumpLog())