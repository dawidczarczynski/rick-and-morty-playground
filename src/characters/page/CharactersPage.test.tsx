import { render, screen } from '@testing-library/react';
import { useCharacters } from 'characters/hooks/useCharacters';
import { CharactersPage } from './CharactersPage';

/** Data provider hook mock */
jest.mock('characters/hooks/useCharacters', () => ({
    useCharacters: jest.fn(),
}));

/** Child components mocks */
jest.mock('characters/components/NoCharacters', () => ({
    NoCharacters: () => <div data-testid="no-characters" />,
}));
jest.mock('characters/components/CharactersGrid', () => ({
    CharactersGrid: () => <div data-testid="characters-grid" />,
}));

describe('Characters Page', () => {
    const useCharactersMock = useCharacters as jest.Mock;

    beforeEach(() => useCharactersMock.mockClear());

    describe('No Characters placeholder', () => {
        it('should be displayed when characters are null', async () => {
            useCharactersMock.mockImplementation(() => ({
                characters: null,
                loading: false,
            }));

            render(<CharactersPage />);

            expect(screen.queryByTestId('no-characters')).toBeInTheDocument();
        });

        it('should be displayed when characters list is empty', async () => {
            useCharactersMock.mockImplementation(() => ({
                characters: [],
                loading: false,
            }));

            render(<CharactersPage />);

            expect(screen.queryByTestId('no-characters')).toBeInTheDocument();
        });

        it('should not be displayed when loading', () => {
            useCharactersMock.mockImplementation(() => ({
                characters: [],
                loading: true,
            }));

            render(<CharactersPage />);

            expect(
                screen.queryByTestId('no-characters')
            ).not.toBeInTheDocument();
        });
    });

    describe('Characters Grid', () => {
        it('should be rendered when characters list is not empty', () => {
            useCharactersMock.mockImplementation(() => ({
                characters: [{ name: 'Example Character' }],
            }));

            render(<CharactersPage />);

            expect(screen.queryByTestId('characters-grid')).toBeInTheDocument();
        });
    });
});
