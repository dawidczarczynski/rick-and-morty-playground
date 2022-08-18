import { CharacterSearch } from 'characters/components/CharacterSearch';
import { CharactersGrid } from 'characters/components/CharactersGrid';
import { useCharacters } from 'characters/hooks/useCharacters';
import { Content } from 'layout/components/Content';
import { Sidebar } from 'layout/components/Sidebar';

export function CharactersPage() {
    const {
        characters,
        totalCount,
        hasNextPage,
        fetchNextPage,
        updateParams,
    } = useCharacters();
    return (
        <>
            <Sidebar>
                <CharacterSearch onSearch={updateParams} />
            </Sidebar>
            <Content>
                {!characters?.length && (
                    <p data-testid="empty">Nothing to display</p>
                )}
                {characters && <CharactersGrid
                    data-testid="characters-list"
                    items={characters}
                    size={totalCount}
                    onListEnd={() => hasNextPage && fetchNextPage()}
                />}
            </Content>
        </>
    );
}
