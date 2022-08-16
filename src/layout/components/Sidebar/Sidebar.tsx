import React, { PropsWithChildren } from 'react';
import { Header } from 'layout/components/Header';
import styles from './sidebar.module.css';

export function Sidebar({ children }: PropsWithChildren) {
    return (
        <aside className={styles.sidebar}>
            <Header />
            {children}
        </aside>
    );
}
