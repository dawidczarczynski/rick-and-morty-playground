import { CharactersGrid } from 'characters/components/CharactersGrid';
import { NoCharacters } from 'characters/components/NoCharacters';
import { CharacterFilters } from 'characters/components/CharacterFilters';
import { useCharacters } from 'characters/hooks/useCharacters';
import { useCharacterFiltersForm } from 'characters/hooks/useCharacterFiltersForm';
import { Content } from 'layout/components/Content';
import { Sidebar } from 'layout/components/Sidebar';

import styles from './charactersPage.module.css';
import { useCharacterParams } from 'characters/hooks/useCharacterParams';

export function CharactersPage() {
    const { params, updateParams } = useCharacterParams();
    const { filtersForm, clearFiltersForm } = useCharacterFiltersForm();
    const { characters, fetchNextPage, loading } = useCharacters(params);

    return (
        <>
            <Sidebar>
                <div className={styles.filterscontainer}>
                    <CharacterFilters
                        {...filtersForm}
                        onClear={clearFiltersForm}
                        onChange={updateParams}
                    />
                </div>
            </Sidebar>
            <Content>
                {!loading && !characters?.length && (
                    <NoCharacters clearFilters={clearFiltersForm} />
                )}
                {characters && (
                    <CharactersGrid
                        data-testid="characters-list"
                        items={characters}
                        onListEnd={fetchNextPage}
                    />
                )}
            </Content>
        </>
    );
}
