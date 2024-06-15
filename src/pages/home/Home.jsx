import TextSection from "../../components/textSection/TextSection";
import Counter from "../../components/counter/Counter";
import Form from "../../components/form/Form";

import { TEXTS } from "../../utils/translations";

const Home = () => {
    return (
        <>
        <TextSection content={TEXTS.textSection.content1} />
        <TextSection content={TEXTS.textSection.content2} />
        <Counter />
        <Form />
        </>
    )
}

export default Home;