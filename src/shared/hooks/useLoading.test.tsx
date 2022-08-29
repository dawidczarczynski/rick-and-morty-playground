import { renderHook } from '@testing-library/react-hooks';
import { PropsWithChildren } from 'react';
import { LoadingProvider } from 'core/providers';
import { useLoading } from './useLoading';

describe('UseLoading', () => {
    const wrapper = ({ children }: PropsWithChildren) => (
        <LoadingProvider>{children}</LoadingProvider>
    );

    it('should not throw if wrapped in proper context', () => {
        const { result } = renderHook(() => useLoading(), { wrapper });

        expect(result.error).toBeUndefined();
    });

    it('should throw if not wrapped in proper context', () => {
        const { result } = renderHook(() => useLoading());

        expect(result.error).not.toBeUndefined();
    });
});
