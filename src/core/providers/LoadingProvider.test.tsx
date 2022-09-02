import { render, screen, act } from '@testing-library/react';
import { useContext } from 'react';
import { LoadingContext, LoadingProvider } from './LoadingProvider';

const TestComponent = () => {
    const context = useContext(LoadingContext);

    return (
        <>
            {context?.loading && <p data-testid="loading">Loading</p>}
            <button
                data-testid="set-loading"
                onClick={() => context?.updateLoading(true)}
            />
            <button
                data-testid="unset-loading"
                onClick={() => context?.updateLoading(false)}
            />
        </>
    );
};

describe('LoadingProvider', () => {
    it('should provide false loading flag by default', () => {
        render(
            <LoadingProvider>
                <TestComponent />
            </LoadingProvider>
        );

        expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });

    it('should allow to update loading flag', () => {
        jest.useFakeTimers();

        render(
            <LoadingProvider>
                <TestComponent />
            </LoadingProvider>
        );
        act(() => {
            screen.getByTestId('set-loading').click();
            jest.runAllTimers();
        });
        expect(screen.queryByTestId('loading')).toBeInTheDocument();

        act(() => {
            screen.getByTestId('unset-loading').click();
            jest.runAllTimers();
        });
        expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });
});
