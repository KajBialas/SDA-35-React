import styles from "./textSection.module.css";

const TextSection = () => {
    return (
        <section className={styles.textSectionContainer}>
            <p>
                During development, Vite sets esnext as the transform target, because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code.
                For the production build, by default Vite targets browsers that support native ES Modules, native ESM dynamic import, and import.meta. Legacy browsers can be supported via the official @vitejs/plugin-legacy. See the Building for Production section for more details.
            </p>
        </section>
    )
}

export default TextSection;