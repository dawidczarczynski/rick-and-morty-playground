import ClipLoader from 'react-spinners/MoonLoader';
import styles from './preloader.module.css';

interface PreloaderProps {
    message?: string;
}

export function Preloader({ message = 'Loading' }: PreloaderProps) {
    return (
        <div data-testid="loading" className={styles.preloadercontainer}>
            <p className={styles.preloadermessage}>{message}</p>
            <ClipLoader loading={true} size={30} />
        </div>
    );
}