import { ApiResponse } from 'shared/api/model/api-response';
import { extractTotalCount } from './extractTotalCount';

describe('Extract total items count from API response pages', () => {
    it('should return 0 when there is no pages', () => {
        const result = extractTotalCount();

        expect(result).toBe(0);
    });

    it('should extract total count from first page info', () => {
        const count = 10;
        const pages: ApiResponse<string[]>[] = [
            {
                info: { count, pages: 1, next: null, prev: null },
                results: ['test'],
            },
        ];

        const result = extractTotalCount<string[]>(pages);

        expect(result).toBe(count);
    });
});
