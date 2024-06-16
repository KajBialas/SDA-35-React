import TextSection from "../../components/textSection/TextSection";

import { TEXTS } from "../../utils/translations";

const Home = () => {
    return (
        <>
        <TextSection content={TEXTS.textSection.content1} />
        <TextSection content={TEXTS.textSection.content2} />
        </>
    )
}

export default Home;