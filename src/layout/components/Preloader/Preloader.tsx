import ClipLoader from 'react-spinners/MoonLoader';
import { Message } from 'shared/components/Message';
import { useLoading } from 'shared/hooks/useLoading';

import styles from './preloader.module.css';

const getPreloaderClass = (loading: boolean) =>
    loading ? styles.preloadercontainer : styles.preloaderhidden;

export function Preloader() {
    const { loading } = useLoading();

    return (
        <div data-testid="loading" className={getPreloaderClass(loading)}>
            <Message severity="info">
                <ClipLoader loading={true} size={20} />
            </Message>
        </div>
    );
}
