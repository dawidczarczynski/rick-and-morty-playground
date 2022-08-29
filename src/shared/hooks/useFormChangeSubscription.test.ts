import { act, renderHook } from '@testing-library/react-hooks';
import { useFormChangeSubscription } from './useFormChangeSubscription';

describe('UseFormChangeSubscribtion', () => {
    const callback = jest.fn();
    const unsubscribe = jest.fn();

    beforeEach(() => {
        jest.useFakeTimers();
        callback.mockClear();
        unsubscribe.mockClear();
    });

    it('should call callback on form change', async () => {
        const formChange = { prop: 'test-value' };
        const watchMock: any = (callback: Function) => {
            callback(formChange);
            return { unsubscribe };
        };
        renderHook(() => useFormChangeSubscription(callback, watchMock));

        act(() => {
            jest.runAllTimers();
        });

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(formChange);
    });

    it('should unsubscribe on unmount', () => {
        const watchMock: any = (_: Function) => ({ unsubscribe });
        const { unmount } = renderHook(() =>
            useFormChangeSubscription(callback, watchMock)
        );

        act(() => unmount());

        expect(unsubscribe).toHaveBeenCalledTimes(1);
    });
});
