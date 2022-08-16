import { ApiRequestParams } from "./model/api-request-params";

export function getParamsString(params: ApiRequestParams) {
    const paramsEntries = Object.entries(params);
    
    if (!paramsEntries.length) {
        return '';
    }

    const paramsString = paramsEntries
        .map(([ key, value ]) => `${key}=${value}`)
        .join('&');

    return `?${paramsString}`;
}
