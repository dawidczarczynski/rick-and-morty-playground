import { PropsWithChildren } from 'react';
import styles from './characterImage.module.css';

interface CharacterImageProps {
    image: string;
}

export function CharacterImage({
    image,
    children,
}: PropsWithChildren<CharacterImageProps>) {
    return (
        <div
            className={styles.cardimage}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className={styles.cardimagechildren}>{children}</div>
        </div>
    );
}
