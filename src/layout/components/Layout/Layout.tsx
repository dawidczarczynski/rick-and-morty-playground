import { PropsWithChildren } from 'react';
import { Preloader } from 'layout/components/Preloader';
import { Errors } from 'layout/components/Errors';

import styles from './layout.module.css';

export function Layout({ children }: PropsWithChildren) {
    return (
        <div className={styles.mainwrapper}>
            {children}
            <Preloader />
            <Errors />
        </div>
    );
}
