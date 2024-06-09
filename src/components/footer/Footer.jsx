import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            Wszystkie prawa zastrzezone 2024.
            <div className={styles.footerAuthor}>
                Autor: SDA
            </div>
        </footer>
    )
}

export default Footer;