import styles from './button.module.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
    return (
        <button type="button" className={styles.button} onClick={onClick}>
            {label}
        </button>
    );
}
