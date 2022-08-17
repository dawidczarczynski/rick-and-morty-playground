import { LoadingContext } from 'shared/providers/LoadingProvider';
import { useContext } from 'react';

export function useLoading() {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error('useLoading must be used within LoadingProvider!');
    }

    return context;
}
