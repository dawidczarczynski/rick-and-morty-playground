import { ApiResponse } from './model/api-response';

export async function makeRequest<T>(url: string): Promise<ApiResponse<T>> {
    const fetchResponse = await fetch(url);
    return await fetchResponse.json();
}
