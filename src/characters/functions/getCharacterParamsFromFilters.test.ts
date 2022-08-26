import { CharacterFiltersValue } from 'characters/model';
import { getCharacterParamsFromFilters } from './getCharacterParamsFromFilters';

describe('Get character params from filters', () => {
    it('should return empty params when filters are empty', () => {
        const filters: CharacterFiltersValue = {
            phrase: '',
            attribute: 'name',
            status: null,
            gender: null,
        };

        const params = getCharacterParamsFromFilters(filters);

        expect(params).toEqual({});
    });

    it('should map search phrase and attribute to params', () => {
        const filters: CharacterFiltersValue = {
            phrase: 'test phrase',
            attribute: 'type',
            status: null,
            gender: null,
        };

        const params = getCharacterParamsFromFilters(filters);

        expect(params).toEqual({ type: 'test phrase' });
    });

    it('should add status filter to params', () => {
        const filters: CharacterFiltersValue = {
            phrase: '',
            attribute: 'name',
            status: 'Dead',
            gender: null,
        };

        const params = getCharacterParamsFromFilters(filters);

        expect(params).toEqual({ status: 'Dead' });
    });

    it('should add gender filter to params', () => {
        const filters: CharacterFiltersValue = {
            phrase: '',
            attribute: 'name',
            status: null,
            gender: 'Male',
        };

        const params = getCharacterParamsFromFilters(filters);

        expect(params).toEqual({ gender: 'Male' });
    });

    it('should map all filters to params', () => {
        const filters: CharacterFiltersValue = {
            phrase: 'some phrase',
            attribute: 'species',
            status: 'unknown',
            gender: 'Male',
        };

        const params = getCharacterParamsFromFilters(filters);

        expect(params).toEqual({
            species: 'some phrase',
            status: 'unknown',
            gender: 'Male',
        });
    });
});
