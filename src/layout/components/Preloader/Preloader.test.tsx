import { render, screen } from '@testing-library/react';
import { useLoading } from 'shared/hooks/useLoading';

import { Preloader } from './Preloader';
import preloaderStyles from './preloader.module.css';

jest.mock('shared/hooks/useLoading', () => ({
    useLoading: jest.fn(),
}));

describe('Preloader', () => {
    const useLoadingMock = useLoading as jest.Mock;

    beforeEach(() => useLoadingMock.mockClear());

    it('should hide preloader when loading flag is false', () => {
        useLoadingMock.mockReturnValue({ loading: false });
        render(<Preloader />);

        expect(screen.queryByTestId('loading')).toHaveClass(
            preloaderStyles.preloaderhidden
        );
    });

    it('should show preloader when flag loading is true', () => {
        useLoadingMock.mockReturnValue({ loading: true });
        render(<Preloader />);

        expect(screen.queryByTestId('loading')).not.toHaveClass(
            preloaderStyles.preloaderhidden
        );
    });
});
