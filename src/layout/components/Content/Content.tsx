import { PropsWithChildren } from 'react';
import styles from './content.module.css';

export function Content({ children }: PropsWithChildren) {
    return <main className={styles.maincontent}>{children}</main>;
}
