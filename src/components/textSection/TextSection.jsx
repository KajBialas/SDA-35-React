import styles from "./textSection.module.css";

const TextSection = ({ content }) => {
    
    return (
        <section className={styles.textSectionContainer}>
            <p>
               {content} 
            </p>
        </section>
    )
}

export default TextSection;

// import styles from "./textSection.module.css";

// const TextSection = (props) => {
    
//     return (
//         <section className={styles.textSectionContainer}>
//             <p>
//                {props.content} 
//             </p>
//         </section>
//     )
// }

// export default TextSection;