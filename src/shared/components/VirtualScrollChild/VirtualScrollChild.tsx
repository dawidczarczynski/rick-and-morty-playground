import React, { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

interface VirtualScrollChildProps {
    height: number;
}

export function VirtualScrollChild({
    height,
    children,
}: PropsWithChildren<VirtualScrollChildProps>) {
    const [ref, inView] = useInView();
    const style = {
        height: `${height}px`,
        overflow: 'hidden',
    };
    return (
        <div style={style} ref={ref}>
            {inView ? children : null}
        </div>
    );
}
