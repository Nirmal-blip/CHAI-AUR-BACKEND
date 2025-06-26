class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ) {
        super(message);  // Error class ka constructor call
        
        this.statusCode = statusCode; // HTTP status (e.g. 404, 500)
        this.message = message;       // Error message

        this.success = false;         // API failure indicator

        this.errors = errors;         // Optional: array of errors (validation, etc.)

    if(statck){
        this.statck=statck
    }
    else{
        Error.captureStackTrace(this, this.constructor)
    }
}
}
export {ApiError}