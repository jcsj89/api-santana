class AppError extends Error {
    message;
    // public readonly status: number;

    constructor(message, statusCode = 400) {
        super();
        this.message = message;
        // this.status = statusCode;
    }
}

export default AppError;
