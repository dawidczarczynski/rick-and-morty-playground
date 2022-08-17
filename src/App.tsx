import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from 'layout/components/Layout';
import { CharactersPage } from 'characters/page/CharactersPage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export function App() {
    return (
        <Layout>
            <QueryClientProvider client={queryClient}>
                <CharactersPage />
            </QueryClientProvider>
        </Layout>
    );
}
