import { mergeResponseResults } from './mergeResponseResults';
import { ApiResponse } from './model/api-response';

describe('Merge response results', () => {
    it('should return empty array when there are no pages', () => {
        const result = mergeResponseResults();

        expect(result).toEqual([]);
    });

    it('should return flatten results for API response', () => {
        const pages: ApiResponse<string[]>[] = [
            {
                info: { count: 2, pages: 1, next: null, prev: null },
                results: ['a', 'b', 'c'],
            },
            {
                info: { count: 2, pages: 1, next: null, prev: null },
                results: ['d', 'e', 'f'],
            },
        ];

        const result = mergeResponseResults(pages);

        expect(result).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });
});
