import { Children, PropsWithChildren } from "react";
import styles from './messages.module.css';

export function Messages({ children }: PropsWithChildren) {
    return (
        <div className={children ? styles.messages : styles.messageshidden}>
            {children}
        </div>
    );
}
