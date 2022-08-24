import { useMemo } from 'react';
import { debounce } from 'shared/functions/debounce';

interface UseDebounceProps {
    callback: Function;
    delay?: number;
}

export function useDebounce({ callback, delay = 500 }: UseDebounceProps) {
    return useMemo(() => debounce(callback, delay), [callback, delay]);
}
