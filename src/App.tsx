import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from 'layout/components/Layout';
import { LoadingProvider } from 'shared/providers/LoadingProvider';
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
        <LoadingProvider>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <CharactersPage />
                </Layout>
            </QueryClientProvider>
        </LoadingProvider>
    );
}
