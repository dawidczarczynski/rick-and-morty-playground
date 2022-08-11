import React, { PropsWithChildren } from 'react';
import { Content } from 'layout/components/Content';
import { Sidebar } from 'layout/components/Sidebar';
import { Header } from 'layout/components/Header';
import styles from './layout.module.css';

export function Layout({ children }: PropsWithChildren) {
    return (
        <div className={styles.mainwrapper}>
            <Sidebar>
                <Header />
            </Sidebar>
            <Content>{children}</Content>
        </div>
    );
}
