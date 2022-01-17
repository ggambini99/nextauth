export class AuthTokenError extends Error {
    constructor() {
        super('Error with authenticantion token')
    }
}