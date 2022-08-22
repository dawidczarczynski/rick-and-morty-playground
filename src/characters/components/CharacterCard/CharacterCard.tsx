import { Character } from 'characters/model/character';
import { CharacterStatus } from 'characters/components/CharacterStatus';
import { CharacterImage } from 'characters/components/CharacterCard/CharacterImage';

import styles from './characterCard.module.css';
import { CharacterDetails } from './CharacterDetails';

interface CharacterCardProps {
    character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <p title={character.name} className={styles.name}>
                    {character.name}
                </p>
            </header>
            <CharacterImage image={character.image}>
                <CharacterStatus status={character.status} />
            </CharacterImage>
            <CharacterDetails character={character} />
        </div>
    );
}
