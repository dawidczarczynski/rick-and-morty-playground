import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';
import { ApiResponse } from 'shared/api';
import { fetchCharacters } from 'characters/functions/fetchCharacters';
import { Character } from 'characters/model';

import { useCharacters } from './useCharacters';

const getFetchCharactersMockResponse = (options?: {
    hideNextPage?: boolean;
    page?: number;
}): ApiResponse<Character[]> => ({
    info: {
        count: 826,
        pages: 42,
        next: options?.hideNextPage
            ? null
            : `https://rickandmortyapi.com/api/character?page=${
                  1 + (options?.page || 1)
              }`,
        prev: null,
    },
    results: [
        {
            id: 1 + (options?.page || 1),
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            origin: {
                name: 'Earth (C-137)',
            },
            location: {
                name: 'Citadel of Ricks',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        },
    ],
});

jest.mock('characters/functions/fetchCharacters', () => ({
    fetchCharacters: jest.fn(),
}));

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    return ({ children }: PropsWithChildren) => (
        <QueryClientProvider client={queryClient} children={children} />
    );
};

describe('UseCharacters', () => {
    const fetchCharactersMock = fetchCharacters as jest.Mock;

    beforeEach(() => {
        const mockResponse = getFetchCharactersMockResponse();
        fetchCharactersMock.mockClear();
        fetchCharactersMock.mockResolvedValue(mockResponse);
    });

    it('should turn loading on after starting request', async () => {
        const { result } = renderHook(() => useCharacters(), {
            wrapper: createWrapper(),
        });

        expect(result.current.loading).toBeTruthy();
    });

    it('should turn loading off after getting response back', async () => {
        const { result, waitForValueToChange } = renderHook(
            () => useCharacters(),
            { wrapper: createWrapper() }
        );

        await waitForValueToChange(() => result.current.characters);

        expect(result.current.loading).toBeFalsy();
    });

    it('should return characters list', async () => {
        const mockResponse = getFetchCharactersMockResponse();
        const { result, waitForValueToChange } = renderHook(
            () => useCharacters(),
            { wrapper: createWrapper() }
        );

        await waitForValueToChange(() => result.current.characters);

        expect(result.current.characters).toEqual(mockResponse.results);
    });

    it('should return characters list build from multiple API pages', async () => {
        const firstMockResponse = getFetchCharactersMockResponse({ page: 1 });
        const secondtMockResponse = getFetchCharactersMockResponse({ page: 2 });
        fetchCharactersMock
            .mockResolvedValueOnce(firstMockResponse)
            .mockResolvedValueOnce(secondtMockResponse);
        const { result, waitForNextUpdate } = renderHook(
            () => useCharacters(),
            { wrapper: createWrapper() }
        );

        await waitForNextUpdate();
        result.current.fetchNextPage();
        await waitForNextUpdate();

        expect(result.current.characters).toEqual([
            ...firstMockResponse.results,
            ...secondtMockResponse.results,
        ]);
    });

    it('should extract total number of characters from API response', async () => {
        const mockResponse = getFetchCharactersMockResponse();
        const { result, waitForValueToChange } = renderHook(
            () => useCharacters(),
            { wrapper: createWrapper() }
        );

        await waitForValueToChange(() => result.current.characters);

        expect(result.current.totalCount).toEqual(mockResponse.info.count);
    });

    it('should allow to fetch next page if there is any', async () => {
        const mockResponse = getFetchCharactersMockResponse();
        const { result, waitForNextUpdate } = renderHook(
            () => useCharacters(),
            { wrapper: createWrapper() }
        );

        await waitForNextUpdate();
        result.current.fetchNextPage();

        expect(fetchCharactersMock).toHaveBeenCalledTimes(2);
        expect(fetchCharactersMock).toHaveBeenCalledWith({
            page: mockResponse.info.next,
            params: {},
        });
    });

    it('should not allow to fetch next page if is not available', async () => {
        const mockResponse = getFetchCharactersMockResponse({
            hideNextPage: true,
        });
        fetchCharactersMock.mockResolvedValue(mockResponse);
        const { result, waitForNextUpdate } = renderHook(
            () => useCharacters(),
            { wrapper: createWrapper() }
        );

        await waitForNextUpdate();
        result.current.fetchNextPage();

        expect(fetchCharactersMock).toHaveBeenCalledTimes(1);
    });
});
