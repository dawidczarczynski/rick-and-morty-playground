import { useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';
import { useDebounce } from 'shared/hooks/useDebounce';

export function useFormChangeSubscription<T>(
    callback: Function,
    watch: UseFormWatch<T>
) {
    const debouncedCallback = useDebounce({ callback, delay: 500 });
    useEffect(() => {
        const subscription = watch(value => debouncedCallback(value));
        return () => subscription.unsubscribe();
    }, [debouncedCallback, watch]);
}
