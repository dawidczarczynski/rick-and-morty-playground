import { getParamsString } from './getParamsString';
import { ApiResponse } from './model/api-response';

export async function makeRequest<T>(url: string, params?: { [key: string]: string }): Promise<ApiResponse<T>> {
    const paramsString = params ? getParamsString(params) : '';
    const fetchResponse = await fetch(`${url}${paramsString}`);
    return await fetchResponse.json();
}
