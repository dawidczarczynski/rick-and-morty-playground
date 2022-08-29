import { act, renderHook } from '@testing-library/react-hooks';
import { useDebounce } from './useDebounce';

describe('UseDebounce', () => {
    const callback = jest.fn();

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        callback.mockClear();
    });

    it('should call debounced function only once if interval is lower than defined delay', () => {
        const { result } = renderHook(() => useDebounce({ callback }));

        act(() => {
            const debouncedCallback = result.current;
            debouncedCallback();
            debouncedCallback();
            debouncedCallback();
            jest.runAllTimers();
        });

        expect(callback).toBeCalledTimes(1);
    });

    it('should allow to call debounced function next time after defined delay', () => {
        const { result } = renderHook(() => useDebounce({ callback }));

        act(() => {
            const debouncedCallback = result.current;

            debouncedCallback();
            debouncedCallback();
            jest.runAllTimers();

            debouncedCallback();
            debouncedCallback();
            jest.runAllTimers();
        });

        expect(callback).toBeCalledTimes(2);
    });
});
