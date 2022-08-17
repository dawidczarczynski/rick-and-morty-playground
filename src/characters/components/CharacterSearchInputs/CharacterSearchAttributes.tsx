import React from 'react';
import { CharacterSearchAttribute } from 'characters/model/characterParams';
import styles from './searchInput.module.css';

interface SearchAttributesProps {
    value?: CharacterSearchAttribute;
    onChange: (attr: CharacterSearchAttribute) => void;
}

const SEARCH_ATTRIBUTES = [
    { value: 'name', label: 'Name' },
    { value: 'species', label: 'Species' },
    { value: 'type', label: 'Type' },
];

export function CharacterSearchAttributes({
    value,
    onChange,
}: SearchAttributesProps) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(event.target.value as CharacterSearchAttribute);

    return (
        <select
            className={styles.searchinput}
            value={value}
            onChange={handleChange}
        >
            {SEARCH_ATTRIBUTES.map(({ value, label }) => (
                <option value={value} key={value}>
                    {label}
                </option>
            ))}
        </select>
    );
}
