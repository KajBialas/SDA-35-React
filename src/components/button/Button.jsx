import styles from './button.module.css';

const Button = ({text, handleClick, type}) => {
    // const cssClassName = type === 'positive' ? 'positive' : type === 'negative' ? 'negative' : 'neutral';

    return (
        <button className={`${styles.button} ${styles[type]}`} onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;