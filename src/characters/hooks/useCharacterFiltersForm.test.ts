import { act, renderHook } from '@testing-library/react-hooks';
import { useCharacterFiltersForm } from './useCharacterFiltersForm';

describe('UseCharacterFiltersForm', () => {
    it('should update form value', () => {
        const testPhrase = 'test phrase';
        const { result } = renderHook(() => useCharacterFiltersForm());

        act(() => {
            result.current.filtersForm.setValue('phrase', testPhrase);
        });
        const { phrase } = result.current.filtersForm.getValues();

        expect(phrase).toEqual(testPhrase);
    });

    it('should clear form value', () => {
        const testPhrase = 'test phrase';
        const { result } = renderHook(() => useCharacterFiltersForm());

        act(() => {
            result.current.filtersForm.setValue('phrase', testPhrase);
            result.current.clearFiltersForm();
        });

        const { phrase } = result.current.filtersForm.getValues();
        expect(phrase).toEqual('');
    });
});
