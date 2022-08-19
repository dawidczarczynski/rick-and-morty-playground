import { PropsWithChildren } from 'react';
import styles from './message.module.css';

type MessageSeverity = 'info' | 'error';
interface MessageProps {
    severity: MessageSeverity;
}

const getContainerClass = (severity: MessageSeverity) => {
    if (severity === 'info') return styles.infomessage;
    if (severity === 'error') return styles.errormessage;

    return styles.infomessage;
};

export function Message({
    children,
    severity = 'info',
}: PropsWithChildren<MessageProps>) {
    return <div className={getContainerClass(severity)}>{children}</div>;
}
