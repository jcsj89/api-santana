class AppError extends Error {
    public readonly message: string;
    // public readonly status: number;

    constructor(message: string, statusCode = 400) {
        super();
        this.message = message;
        // this.status = statusCode;
    }
}

export default AppError;
