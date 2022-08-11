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
            <div
                className={styles.cardimage}
                style={{ backgroundImage: `url(${character.image})` }}
            ></div>
            <footer className={styles.footer}>
                {character.species} {character.gender} from{' '}
                {character.origin.name}
            </footer>
        </div>
    );
}
