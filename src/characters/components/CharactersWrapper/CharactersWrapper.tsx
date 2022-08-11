import React from 'react';
import { useCharacters } from 'characters/hooks/useCharacters';
import { CharactersGrid } from 'characters/components/CharactersGrid';

export function CharactersWrapper() {
    const {
        isLoading,
        error,
        characters,
        totalCount,
        hasNextPage,
        fetchNextPage,
    } = useCharacters();

    if (isLoading) {
        return <p data-testid="loading">Loading...</p>;
    }

    if (error) {
        return <p data-testid="error">Error: {error}</p>;
    }

    if (!characters?.length) {
        return <p data-testid="empty">Nothing to display</p>;
    }

    return (
        <div>
            Total: {totalCount}
            <CharactersGrid
                data-testid="characters-list"
                items={characters}
                size={totalCount}
                onListEnd={() => hasNextPage && fetchNextPage()}
            />
        </div>
    );
}
