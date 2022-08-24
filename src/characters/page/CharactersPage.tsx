import { CharactersGrid } from 'characters/components/CharactersGrid';
import { NoCharacters } from 'characters/components/NoCharacters';
import { CharacterFilters } from 'characters/components/CharacterFilters';
import { useCharacters } from 'characters/hooks/useCharacters';
import { useCharacterFilters } from 'characters/hooks/useCharacterFilters';
import { useCharacterParams } from 'characters/hooks/useCharacterParams';
import { Content } from 'layout/components/Content';
import { Sidebar } from 'layout/components/Sidebar';

import styles from './charactersPage.module.css';

export function CharactersPage() {
    const { params, updateParams, clearParams } = useCharacterParams();
    const { form, clearFilters } = useCharacterFilters({
        onChange: updateParams,
    });

    const { characters, totalCount, fetchNextPage, loading } =
        useCharacters(params);

    const clearSearchCriteria = () => {
        clearFilters();
        clearParams();
    };

    return (
        <>
            <Sidebar>
                <div className={styles.filterscontainer}>
                    <CharacterFilters {...form} clearFilters={clearFilters} />
                </div>
            </Sidebar>
            <Content>
                {!loading && !characters?.length && (
                    <NoCharacters clearSearchCriteria={clearSearchCriteria} />
                )}
                {characters && (
                    <CharactersGrid
                        data-testid="characters-list"
                        items={characters}
                        size={totalCount}
                        onListEnd={fetchNextPage}
                    />
                )}
            </Content>
        </>
    );
}
