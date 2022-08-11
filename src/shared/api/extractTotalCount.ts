import { ApiResponse } from './model/api-response';

export function extractTotalCount<T>(pages?: ApiResponse<T>[]): number {
    if (!pages) {
        return 0;
    }
    const [{ info }] = pages;
    return info.count || 0;
}
