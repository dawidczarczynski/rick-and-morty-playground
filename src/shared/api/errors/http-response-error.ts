export class HttpResponseError extends Error {
    constructor(status: number) {
        super(`HTTP request failed with status ${status}`);
    }
}
