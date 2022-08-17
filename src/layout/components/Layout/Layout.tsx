import { PropsWithChildren } from 'react';
import { useLoading } from 'shared/hooks/useLoading';
import { Preloader } from 'layout/components/Preloader';
import { Messages } from 'layout/components/Messages';

import styles from './layout.module.css';

export function Layout({ children }: PropsWithChildren) {
    const { loading, message } = useLoading();

    return (
        <div className={styles.mainwrapper}>
            <Messages>{loading && <Preloader message={message} />}</Messages>
            {children}
        </div>
    );
}
