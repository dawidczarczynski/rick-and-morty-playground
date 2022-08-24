import { Button } from 'shared/components/Button';
import styles from './noCharacters.module.css';

interface NoCharactersProps {
    clearSearchCriteria: () => void;
}

const image = `${process.env.PUBLIC_URL}/nothing.png`;

export function NoCharacters({ clearSearchCriteria }: NoCharactersProps) {
    return (
        <div data-testid="empty" className={styles.emptycontainer}>
            <img
                className={styles.emptyimage}
                src={image}
                alt="Nothing to show"
                width="450"
            />
            <h2 className={styles.emptyheading}>Nothing to display.</h2>
            <p className={styles.emptymessage}>
                Try to change search criteria on the left hand side.
            </p>
            <Button
                onClick={clearSearchCriteria}
                label="Clear search criteria"
            />
        </div>
    );
}
