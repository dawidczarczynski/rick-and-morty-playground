import { ApiResponse } from './model/api-response';

export function mergeResponseResults<T>(pages?: ApiResponse<T[]>[]): T[] {
    if (!pages) {
        return [];
    }

    return pages.map(page => page.results).flat(1);
}
