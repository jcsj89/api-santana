class AppError {
    public readonly message: string = '';
    public readonly statusCode;

    constructor(messages: string, statusCode = 500) {
        this.message = messages;
        this.statusCode = statusCode;
    }
}

export default AppError;
