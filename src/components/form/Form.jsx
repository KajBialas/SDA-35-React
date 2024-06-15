import { useState } from "react";

const Form = () => {
    const [inputName, setInputName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputName);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input 
                    type="text" 
                    value={inputName} 
                    onChange={(event) => setInputName(event.target.value)} 
                />
            </label>
            <button type="submit">Wyślij</button>
        </form>
    )
}

export default Form;


// Zadanie 1:
// - utwórz formularz zawięrajacy: imie, nazwisko, adres, email
// - po wysłaniu dane powinny zalogować się w konsoli przegladarki
// - po wysłaniu formularz powinien zawierać puste dane


// Zadanie 1 dodatkowe:
// - wyświetl dane z formularze w przegladarce
// - po ponownym wyslaniu formularza, poprzednie dane tez powinny byc widoczne