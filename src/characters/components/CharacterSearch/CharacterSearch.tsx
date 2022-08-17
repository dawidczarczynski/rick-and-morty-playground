import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { CharactersParams } from 'characters/model/characterParams';
import { debounce } from 'shared/functions/debounce';
import styles from './characterSearch.module.css';

interface CharacterSearchProps {
    onSearch: (search: CharactersParams) => void;
}

export function CharacterSearch({ onSearch }: CharacterSearchProps) {
    const [ searchPhrase, setSearchPhrase ] = useState('');
    const [ searchAttribute, setSearchAttribute ] = useState('name');
    const searchCallback = useMemo(() => debounce(onSearch), [ onSearch ]);

    useEffect(() => { 
       searchPhrase && searchCallback({ [searchAttribute]: searchPhrase });
    }, [ searchPhrase, searchAttribute, searchCallback ])

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPhrase(event.target.value);
    };

    const handleAttributeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchAttribute(event.target.value);
    };

    const handleSearchClear = () => {
        setSearchPhrase('');
        setSearchAttribute('name');
        onSearch({});
    };

    return (
        <div className={styles.searchcontainer}>
            <label className={styles.searchlabel}>Search for</label>
            <input 
                type="text"
                placeholder='Search for character...'
                className={styles.searchinput}
                value={searchPhrase}
                onChange={handleSearchChange} />
                
            <label className={styles.searchlabel}>Search by</label>
            <select 
                className={styles.searchinput}
                value={searchAttribute} 
                onChange={handleAttributeChange}>
                <option value="name">Name</option>
                <option value="species">Species</option>
                <option value="type">Type</option>
            </select>

            <div className={styles.searchaction}>
                <button onClick={handleSearchClear} className={styles.searchclear}>
                    <span>
                        <FontAwesomeIcon icon={faXmark} /> Clear
                    </span>
                </button>
            </div>
        </div>
    );
}
