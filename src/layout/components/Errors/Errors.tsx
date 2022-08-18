import { useEffect } from 'react';
import { Message } from 'shared/components/Message';
import { useError } from 'shared/hooks/useError';
import styles from './errors.module.css';

const getContainerClass = (error: string | null) => error ? styles.errors : styles.noerrors;

export function Errors() {
    const { error, clearError } = useError();

    useEffect(() => {
        const timeout = setTimeout(clearError, 3000);
        return () => clearTimeout(timeout);
    });

    return (
        <div className={getContainerClass(error)}>
            <Message severity='error'>{error}</Message>
        </div>
    );
}
