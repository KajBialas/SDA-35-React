import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = ({title}) => {
    return (
        <header className={styles.headerContainer}>
            {title}
            <nav>
                <Link to="/" className={styles.headerLink}>
                    Home
                </Link>
                <Link to="/about" className={styles.headerLink}>
                    About
                </Link>
                <Link to="/offer" className={styles.headerLink}>
                    Offer
                </Link>
                <Link to="/contact" className={styles.headerLink}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}

export default Header;