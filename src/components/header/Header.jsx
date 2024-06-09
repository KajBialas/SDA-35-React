import styles from './header.module.css';

const Header = ({title}) => {
    return (
        <header className={styles.headerContainer}>
            {title}
        </header>
    )
}

export default Header;