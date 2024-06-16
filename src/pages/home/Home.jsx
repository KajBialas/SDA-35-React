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

// Zadanie 2
// Utworz podstrone blog
// Pobierz i wyswietl liste postów z zewnętrznego API

// Zadanie 2 dodatkowe
// Poastaraj się zadbać o obsługę błędów i statusu ładowanie