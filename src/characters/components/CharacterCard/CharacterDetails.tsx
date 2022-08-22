import { Character } from 'characters/model/character';
import styles from './characterDetails.module.css';

interface CharacterDetailsProps {
    character: Character;
}

export function CharacterDetails({ character }: CharacterDetailsProps) {
    const locations = [character.origin?.name, character.location?.name];

    return (
        <>
            <p className={styles.meta}>
                <span className={styles.metaitem}>{character.species}</span>
                <span className={styles.metaitem}>{character.gender}</span>
            </p>
            <div className={styles.locations}>
                {locations.map(location => (
                    <div key={location} className={styles.location}>
                        <p title={location} className={styles.locationtext}>
                            {location}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
