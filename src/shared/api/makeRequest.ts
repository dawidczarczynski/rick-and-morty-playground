import { ApiResponse } from 'shared/api/model/api-response';
import { HttpResponseError, HttpUnknownError } from 'shared/api/errors';
import { getParamsString } from 'shared/api/getParamsString';

export async function makeRequest<T>(
    url: string,
    params?: { [key: string]: string }
): Promise<ApiResponse<T>> {
    try {
        const paramsString = params ? getParamsString(params) : '';
        const fetchResponse = await fetch(`${url}${paramsString}`);

        if (!fetchResponse.ok) {
            throw new HttpResponseError(fetchResponse.status);
        }

        return await fetchResponse.json();
    } catch (e) {
        console.error(e);
        if (e instanceof HttpResponseError) {
            throw e;
        }

        throw new HttpUnknownError();
    }
}
