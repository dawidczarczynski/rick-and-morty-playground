import { render, screen } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { VirtualScrollChild } from './VirtualScrollChild';

describe('VirtualScrollChild', () => {
    const TestComponent = () => (
        <VirtualScrollChild height={50}>
            <div data-testid="test-child"></div>
        </VirtualScrollChild>
    );

    it('should render child component when is in the view', () => {
        render(<TestComponent />);
        mockAllIsIntersecting(true);

        expect(screen.queryByTestId('test-child')).toBeInTheDocument();
    });

    it('should not render child component when is outside the view', () => {
        render(<TestComponent />);
        mockAllIsIntersecting(false);

        expect(screen.queryByTestId('test-child')).not.toBeInTheDocument();
    });
});
