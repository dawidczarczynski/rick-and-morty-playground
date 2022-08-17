import React, { PropsWithChildren } from 'react';
import styles from './layout.module.css';

export function Layout({ children }: PropsWithChildren) {
    return <div className={styles.mainwrapper}>{children}</div>;
}
