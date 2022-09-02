import { render, screen, act } from '@testing-library/react';
import { useContext } from 'react';
import { ErrorContext, ErrorProvider } from './ErrorProvider';

const testError = 'test error';

const TestComponent = () => {
    const context = useContext(ErrorContext);

    return (
        <>
            <p data-testid="error">{context?.error}</p>
            <button
                data-testid="set-error"
                onClick={() => context?.setError(testError)}
            />
            <button
                data-testid="clear-error"
                onClick={() => context?.clearError()}
            />
        </>
    );
};

describe('ErrorProvider', () => {
    it('should provide error message', () => {
        render(
            <ErrorProvider>
                <TestComponent />
            </ErrorProvider>
        );
        act(() => screen.getByTestId('set-error').click());

        expect(screen.getByTestId('error')).toHaveTextContent(testError);
    });

    it('should clear error message', () => {
        render(
            <ErrorProvider>
                <TestComponent />
            </ErrorProvider>
        );
        act(() => screen.getByTestId('set-error').click());
        act(() => screen.getByTestId('clear-error').click());

        expect(screen.getByTestId('error')).toBeEmptyDOMElement();
    });
});
