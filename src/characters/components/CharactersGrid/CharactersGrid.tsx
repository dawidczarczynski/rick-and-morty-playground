import { VirtualScrollChild } from 'shared/components/VirtualScrollChild';
import { InfiniteScroll } from 'shared/components/InifiniteScroll';
import { Character } from 'characters/model/character';
import { CharacterCard } from 'characters/components/CharacterCard';

import styles from './charactersGrid.module.css';

interface CharactersGridProps {
    items: Character[];
    onListEnd: () => void;
}

export function CharactersGrid({ items, onListEnd }: CharactersGridProps) {
    return (
        <div className={styles.gridcontainer}>
            <InfiniteScroll lastItemHandler={onListEnd}>
                {items.map(character => (
                    <VirtualScrollChild key={character.id} height={470}>
                        <div className={styles.griditem}>
                            <CharacterCard character={character} />
                        </div>
                    </VirtualScrollChild>
                ))}
            </InfiniteScroll>
        </div>
    );
}
