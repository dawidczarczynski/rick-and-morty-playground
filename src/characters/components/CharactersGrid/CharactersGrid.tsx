import React from 'react';

import { VirtualScrollChild } from 'shared/components/VirtualScrollChild';
import { InfiniteScroll } from 'shared/components/InifiniteScroll';
import { Character } from 'characters/model/character';
import { CharacterCard } from 'characters/components/CharacterCard';

import styles from './charactersGrid.module.css';

interface CharactersGridProps {
    items: Character[];
    size: number;
    onListEnd: () => void;
}

export function CharactersGrid({
    items,
    size,
    onListEnd,
}: CharactersGridProps) {
    return (
        <div className={styles.gridcontainer}>
            <InfiniteScroll 
                lastItemHandler={onListEnd}>
                {items.map(character => (
                    <VirtualScrollChild key={character.id} height={455}>
                        <CharacterCard
                            data-testid="character"
                            character={character}
                        />
                    </VirtualScrollChild>
                ))}
            </InfiniteScroll>
        </div>
    );
}
