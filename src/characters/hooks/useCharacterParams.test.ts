import { renderHook, act } from '@testing-library/react-hooks';
import { CharacterFiltersValue } from 'characters/model';
import { useCharacterParams } from './useCharacterParams';

describe('UseCharacterParams', () => {
    it('should update params based on given filters', () => {
        const filters: CharacterFiltersValue = {
            phrase: 'test-phrase',
            attribute: 'name',
            status: 'Alive',
            gender: 'Female',
        };
        const { result } = renderHook(() => useCharacterParams());

        act(() => {
            result.current.updateParams(filters);
        });

        expect(result.current.params).toEqual({
            name: filters.phrase,
            status: filters.status,
            gender: filters.gender,
        });
    });
});
