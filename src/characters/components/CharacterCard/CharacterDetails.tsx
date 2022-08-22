import { Character } from 'characters/model/character';
import styles from './characterDetails.module.css';

interface CharacterDetailsProps {
    character: Character;
}

export function CharacterDetails({ character }: CharacterDetailsProps) {
    const locations = [
        { id: `${character.id}-origin-name`, name: character.origin?.name },
        { id: `${character.id}-location=name`, name: character.location?.name },
    ];

    return (
        <>
            <p className={styles.meta}>
                <span className={styles.metaitem}>{character.species}</span>
                <span className={styles.metaitem}>{character.gender}</span>
            </p>
            <div className={styles.locations}>
                {locations.map(({ id, name }) => (
                    <div key={id} className={styles.location}>
                        <p title={name} className={styles.locationtext}>
                            {name}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
