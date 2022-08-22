import {
    faHeartPulse,
    faSkull,
    faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './charaterStatus.module.css';

interface CharacterStatusProps {
    status: 'Alive' | 'Dead' | 'unknown';
}

const getIndicatorDetails = (status: 'Alive' | 'Dead' | 'unknown') => {
    if (status === 'Alive')
        return {
            css: styles.statusIndicatorAlive,
            icon: faHeartPulse,
        };

    if (status === 'Dead')
        return {
            css: styles.statusIndicatorDead,
            icon: faSkull,
        };

    return {
        css: styles.statusIndicatorUnknown,
        icon: faQuestion,
    };
};

export function CharacterStatus({ status }: CharacterStatusProps) {
    const statusIndicator = getIndicatorDetails(status);

    return (
        <div className={statusIndicator.css} title={status}>
            <FontAwesomeIcon
                icon={statusIndicator.icon}
                size="2x"
                color="white"
            />
        </div>
    );
}
