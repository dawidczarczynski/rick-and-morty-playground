import { createContext, PropsWithChildren, useState } from 'react';

type ErrorContextValue = {
    error: string | null;
    setError: (error: string | null) => void;
    clearError: () => void;
} | null;

export const ErrorContext = createContext<ErrorContextValue>(null);

export function ErrorProvider({ children }: PropsWithChildren) {
    const [error, setError] = useState<string | null>(null);
    const clearError = () => setError(null);

    return (
        <ErrorContext.Provider value={{ error, setError, clearError }}>
            {children}
        </ErrorContext.Provider>
    );
}
