import { debounce } from './debounce';

describe('Debounce', () => {
    jest.useFakeTimers();
    const callbackMock = jest.fn();
    beforeEach(() => callbackMock.mockClear());

    it('should call debounced function only once if interval is lower than defined delay', () => {
        const delay = 500;
        const callbackMock = jest.fn();
        const debouncedCallback = debounce(callbackMock, delay);

        debouncedCallback();
        debouncedCallback();
        debouncedCallback();
        jest.runAllTimers();

        expect(callbackMock).toBeCalledTimes(1);
    });

    it('should allow to call debounced function next time after defined delay', () => {
        const delay = 500;
        const callbackMock = jest.fn();
        const debouncedCallback = debounce(callbackMock, delay);

        debouncedCallback();
        debouncedCallback();
        jest.runAllTimers();

        debouncedCallback();
        debouncedCallback();
        jest.runAllTimers();

        expect(callbackMock).toBeCalledTimes(2);
    });
});
