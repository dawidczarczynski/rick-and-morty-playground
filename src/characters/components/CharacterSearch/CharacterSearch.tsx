import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useCharacterSearch } from 'characters/hooks/useCharacterSearch';
import { CharactersParams } from 'characters/model/characterParams';
import {
    CharacterSearchAttributes,
    CharacterSearchPhrase,
} from 'characters/components/CharacterSearchInputs';

import styles from './characterSearch.module.css';

interface CharacterSearchProps {
    onSearch: (search: CharactersParams) => void;
}

export function CharacterSearch({ onSearch }: CharacterSearchProps) {
    const {
        searchPhrase,
        setSearchPhrase,
        searchAttribute,
        setSearchAttribute,
        clear,
    } = useCharacterSearch({ onSearch });

    return (
        <div className={styles.searchcontainer}>
            <label className={styles.searchlabel}>Search for</label>
            <CharacterSearchPhrase
                value={searchPhrase}
                onChange={setSearchPhrase}
            />

            <label className={styles.searchlabel}>Search by</label>
            <CharacterSearchAttributes
                value={searchAttribute}
                onChange={setSearchAttribute}
            />

            <div className={styles.searchaction}>
                <button onClick={clear} className={styles.searchclear}>
                    <span>
                        <FontAwesomeIcon icon={faXmark} /> Clear
                    </span>
                </button>
            </div>
        </div>
    );
}
