import { renderHook } from '@testing-library/react-hooks';
import { PropsWithChildren } from 'react';
import { ErrorProvider } from 'core/providers';
import { useError } from './useError';

describe('UseError', () => {
    const wrapper = ({ children }: PropsWithChildren) => (
        <ErrorProvider>{children}</ErrorProvider>
    );

    it('should not throw if wrapped in proper context', () => {
        const { result } = renderHook(() => useError(), { wrapper });

        expect(result.error).toBeUndefined();
    });

    it('should throw if not wrapped in proper context', () => {
        const { result } = renderHook(() => useError());

        expect(result.error).not.toBeUndefined();
    });
});
