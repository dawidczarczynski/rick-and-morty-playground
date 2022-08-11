import React from 'react';
import styles from './charaterStatus.module.css';

interface CharacterStatusProps {
    status: 'Alive' | 'Dead' | 'unknown';
}

const getIndicatorStyle = (status: 'Alive' | 'Dead' | 'unknown') => {
    if (status === 'Alive') return styles.statusIndicatorAlive;
    if (status === 'Dead') return styles.statusIndicatorDead;

    return styles.statusIndicatorUnknown;
};

export function CharacterStatus({ status }: CharacterStatusProps) {
    const indicatorStyle = getIndicatorStyle(status);

    return (
        <p className={styles.status}>
            <span className={indicatorStyle}></span>
            {status}
        </p>
    );
}
