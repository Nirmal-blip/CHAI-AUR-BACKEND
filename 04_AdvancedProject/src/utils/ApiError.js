class ApiError extends Error{
    constructor(
        statusCode,
        message=" Something went wrong",
        errors =[],
        statck=""
    ){
        super(message)
        this.statusCode = statusCode
        this.message
        this.success = false
        this.errors = this.errors
    

    if(statck){
        this.statck=statck
    }
    else{
        Error.captureStackTrace(this, this.constructor)
    }
}
}
export {ApiError}