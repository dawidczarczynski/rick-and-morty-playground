import { render, screen } from '@testing-library/react';
import {
    mockAllIsIntersecting,
    mockIsIntersecting,
} from 'react-intersection-observer/test-utils';
import { InfiniteScroll } from './InfiniteScroll';

const getLastChildRef = async () => {
    const [lastChild] = (await screen.findAllByTestId('child-ref')).reverse();
    return lastChild;
};

describe('Inifnite Scroll', () => {
    const lastItemHandler = jest.fn();

    beforeEach(() => lastItemHandler.mockClear());

    it('should not render if there are no children', () => {
        const { container } = render(
            <InfiniteScroll lastItemHandler={lastItemHandler} />
        );
        mockAllIsIntersecting(false);

        expect(container).toBeEmptyDOMElement();
    });

    it('should fire handler when last child is visible', async () => {
        render(
            <InfiniteScroll lastItemHandler={lastItemHandler}>
                <div data-testid="first-child" />
                <div data-testid="last-child" />
            </InfiniteScroll>
        );

        const lastChild = await getLastChildRef();
        mockIsIntersecting(lastChild, true);

        expect(lastItemHandler).toHaveBeenCalledTimes(1);
    });

    it('should not fire handler when last child is not visible', async () => {
        render(
            <InfiniteScroll lastItemHandler={lastItemHandler}>
                <div data-testid="first-child" />
                <div data-testid="last-child" />
            </InfiniteScroll>
        );

        const lastChild = await getLastChildRef();
        mockIsIntersecting(lastChild, false);

        expect(lastItemHandler).not.toHaveBeenCalled();
    });
});
