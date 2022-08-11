import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CharactersWrapper } from 'characters/components/CharactersWrapper';
import { Layout } from 'layout/components/Layout';

const queryClient = new QueryClient();

export function App() {
    return (
        <Layout>
            <QueryClientProvider client={queryClient}>
                <CharactersWrapper />
            </QueryClientProvider>
        </Layout>
    );
}
