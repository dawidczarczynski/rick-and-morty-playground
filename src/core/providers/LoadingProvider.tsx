import { createContext, PropsWithChildren, useState } from 'react';

type LoadingContextValue = {
    loading: boolean;
    updateLoading: (loading: boolean) => void;
} | null;

export const LoadingContext = createContext<LoadingContextValue>(null);

export function LoadingProvider({ children }: PropsWithChildren) {
    const [loading, setLoading] = useState(false);

    const updateLoading = (loading: boolean) =>
        loading ? setLoading(true) : setTimeout(() => setLoading(false), 1000);

    return (
        <LoadingContext.Provider value={{ loading, updateLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}
