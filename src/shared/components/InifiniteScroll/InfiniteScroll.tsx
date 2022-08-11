import React, { PropsWithChildren, Children } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteScrollProps {
    lastItemHandler: () => void;
}

// TODO: Improve infinite scroll and virtualization
export function InfiniteScroll({
    children,
    lastItemHandler,
}: PropsWithChildren<InfiniteScrollProps>) {
    const [lastItemRef] = useInView({
        onChange: lastItemInView => lastItemInView && lastItemHandler(),
    });
    const childrenCount = Children.count(children);

    if (!children) {
        return null;
    }

    return (
        <>
            {Children.map(children, (child, index) => (
                <div ref={index === childrenCount - 1 ? lastItemRef : null}>
                    {child}
                </div>
            ))}
        </>
    );
}
