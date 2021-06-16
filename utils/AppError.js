class AppError extends Error {
    constructor(message, code) {
        super(message) // bult-in param for error object
        console.log("This is the appError")
        this.code = code
        // detected HTTP status code by first digit of error code 
        // do you need a status for errors
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError