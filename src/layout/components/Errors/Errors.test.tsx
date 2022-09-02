import { render, screen } from '@testing-library/react';
import { useError } from 'shared/hooks/useError';

import { Errors } from './Errors';

jest.mock('shared/hooks/useError', () => ({
    useError: jest.fn(),
}));

describe('Errors', () => {
    const useErrorMock = useError as jest.Mock;

    it('should display error', () => {
        const testError = 'test error message';
        useErrorMock.mockReturnValue({ error: testError });

        render(<Errors />);

        expect(screen.queryByTestId('errors')).toHaveTextContent(testError);
    });

    it('should clear error after timeout', () => {
        const testError = 'test error message';
        const clearErrorMock = jest.fn();
        useErrorMock.mockReturnValue({
            error: testError,
            clearError: clearErrorMock,
        });
        jest.useFakeTimers();

        render(<Errors />);
        jest.runAllTimers();

        expect(clearErrorMock).toHaveBeenCalledTimes(1);
    });
});
