import styles from './header.module.css';

const LOGO_URL = `${process.env.PUBLIC_URL}/logo.svg`;

export function Header() {
    return (
        <header className={styles.mainheader}>
            <img src={LOGO_URL} width="200" alt="Rick and Morty Playground" />
        </header>
    );
}
