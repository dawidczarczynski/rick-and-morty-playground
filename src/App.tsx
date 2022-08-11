import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CharactersWrapper } from './characters/components/CharactersWrapper';
import styles from './app.module.css';

const queryClient = new QueryClient();

export function App() {
    return (
        <div className={styles.mainwrapper}>
            <QueryClientProvider client={queryClient}>
                <CharactersWrapper />
            </QueryClientProvider>
        </div>
    );
}
