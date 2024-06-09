import styles from "./footer.module.css";

const Footer = (props) => {
    return (
        <footer className={styles.footerContainer}>
            { props.copyrightInfo }
            <div className={styles.footerAuthor}>
                { props.authorInfo }
            </div>
        </footer>
    )
}

export default Footer;