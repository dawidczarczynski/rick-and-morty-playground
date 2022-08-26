import { ApiResponse, makeRequest } from 'shared/api';
import { CharactersParams } from 'characters/model';
import { fetchCharacters, CHARACTERS_RESOURCE_URI } from './fetchCharacters';

jest.mock('shared/api', () => ({
    makeRequest: jest.fn(),
}));

describe('Fetch characters next page and params', () => {
    const requestMock = makeRequest as jest.Mock;
    beforeEach(() => requestMock.mockClear());

    it('should fetch base resource when no details are provided', async () => {
        const fetchDetails = {};

        await fetchCharacters(fetchDetails);

        expect(requestMock).toBeCalledWith(CHARACTERS_RESOURCE_URI, {});
    });

    it('should fetch using provided details', async () => {
        const params: CharactersParams = { name: 'test-name' };

        await fetchCharacters({ params });

        expect(requestMock).toBeCalledWith(CHARACTERS_RESOURCE_URI, params);
    });

    it('should fetch using given next page URL', async () => {
        const page = 'some-next-page-url';

        await fetchCharacters({ page });

        expect(requestMock).toBeCalledWith(page, {});
    });

    it('should ignore params when next page URL is provided', async () => {
        const page = 'some-next-page-url';
        const params: CharactersParams = { name: 'test-name' };

        await fetchCharacters({ page, params });

        expect(requestMock).toBeCalledWith(page, {});
    });
});

describe('Fetch character results', () => {
    const response: ApiResponse<string[]> = {
        info: { count: 1, pages: 1, next: null, prev: null },
        results: ['test'],
    };

    beforeEach(() => (makeRequest as jest.Mock).mockResolvedValue(response));

    it('should return API response', async () => {
        const result = await fetchCharacters({});

        expect(result).toEqual(response);
    });
});
