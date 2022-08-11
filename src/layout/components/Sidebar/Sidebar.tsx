import React, { PropsWithChildren } from 'react';
import styles from './sidebar.module.css';

export function Sidebar({ children }: PropsWithChildren) {
    return <aside className={styles.sidebar}>{children}</aside>;
}
