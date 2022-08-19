import { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorProvider, LoadingProvider } from 'core/providers';
import { queryClient } from 'core/queryClient';

export function CoreProviders({ children }: PropsWithChildren) {
    return (
        <LoadingProvider>
            <ErrorProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ErrorProvider>
        </LoadingProvider>
    );
}
