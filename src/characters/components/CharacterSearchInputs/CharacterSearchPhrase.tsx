import React from 'react';
import styles from './searchInput.module.css';

interface CharacterSearchPhraseProps {
    value?: string;
    onChange: (phrase: string) => void;
}

export function CharacterSearchPhrase({
    value,
    onChange,
}: CharacterSearchPhraseProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value);

    return (
        <input
            type="text"
            placeholder="Search for character..."
            className={styles.searchinput}
            value={value}
            onChange={handleChange}
        />
    );
}
