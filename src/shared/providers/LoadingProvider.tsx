import { createContext, PropsWithChildren, useState } from 'react';

type LoadingContextValue = { 
    loading: boolean;
    updateLoading: (loading: boolean) => void;
    message?: string;
    updateMessage: (message: string) => void;
} | null;

export const LoadingContext = createContext<LoadingContextValue>(null);

export function LoadingProvider({ children }: PropsWithChildren) {
    const [ loading, setLoading ] = useState(false);
    const [ message, updateMessage ] = useState('');

    const updateLoading = (loading: boolean) => loading 
        ? setLoading(true)
        : setTimeout(() => setLoading(false), 700);

    return (
        <LoadingContext.Provider value={{ loading, message, updateLoading, updateMessage }}>
            {children}
        </LoadingContext.Provider>
    )
}