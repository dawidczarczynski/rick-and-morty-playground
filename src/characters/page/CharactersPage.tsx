import { CharacterSearch } from 'characters/components/CharacterSearch';
import { CharactersGrid } from 'characters/components/CharactersGrid';
import { NoCharacters } from 'characters/components/NoCharacters';
import { useCharacters } from 'characters/hooks/useCharacters';
import { useCharacterParams } from 'characters/hooks/useCharacterParams';
import { Content } from 'layout/components/Content';
import { Sidebar } from 'layout/components/Sidebar';
import { useCharacterSearch } from 'characters/hooks/useCharacterSearch';

export function CharactersPage() {
    const { params, updateParams, clearParams } = useCharacterParams();

    const { phrase, setPhrase, attribute, setAttribute, clearSearch } =
        useCharacterSearch({ onSearch: updateParams });

    const { characters, totalCount, fetchNextPage, loading } =
        useCharacters(params);

    const clearSearchCriteria = () => {
        clearSearch();
        clearParams();
    };

    return (
        <>
            <Sidebar>
                <CharacterSearch
                    phrase={phrase}
                    attribute={attribute}
                    onPhraseChange={setPhrase}
                    onAttributeChange={setAttribute}
                    onClear={clearSearch}
                />
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
