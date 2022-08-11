import React from 'react';
import { Character } from 'characters/model/character';
import { CharacterStatus } from 'characters/components/CharacterStatus';

import styles from './characterCard.module.css';

interface CharacterCardProps {
    character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <p className={styles.name}>{character.name}</p>
                <CharacterStatus status={character.status} />
            </header>
            <img
                className={styles.cardimage}
                src={character.image}
                alt={character.name}
            />
            <footer className={styles.footer}>
                {character.species} {character.gender} from{' '}
                {character.origin.name}
            </footer>
        </div>
    );
}
