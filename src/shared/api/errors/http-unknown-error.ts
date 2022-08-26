export class HttpUnknownError extends Error {
    constructor() {
        super('HTTP request failed due to unknown error');
    }
}
