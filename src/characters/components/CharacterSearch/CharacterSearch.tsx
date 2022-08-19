import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { CharacterSearchAttribute } from 'characters/model/characterParams';
import {
    CharacterSearchAttributes,
    CharacterSearchPhrase,
} from 'characters/components/CharacterSearchInputs';

import styles from './characterSearch.module.css';

interface CharacterSearchProps {
    phrase: string;
    attribute: CharacterSearchAttribute;
    onPhraseChange: (phrase: string) => void;
    onAttributeChange: (attribute: CharacterSearchAttribute) => void;
    onClear: () => void;
}

export function CharacterSearch({
    phrase,
    attribute,
    onPhraseChange,
    onAttributeChange,
    onClear,
}: CharacterSearchProps) {
    return (
        <div className={styles.searchcontainer}>
            <label className={styles.searchlabel}>Search for</label>
            <CharacterSearchPhrase value={phrase} onChange={onPhraseChange} />

            <label className={styles.searchlabel}>Search by</label>
            <CharacterSearchAttributes
                value={attribute}
                onChange={onAttributeChange}
            />
            <div className={styles.searchaction}>
                <button onClick={onClear} className={styles.searchclear}>
                    <span>
                        <FontAwesomeIcon icon={faXmark} /> Clear
                    </span>
                </button>
            </div>
        </div>
    );
}
