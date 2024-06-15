import { useState } from "react";

const Form = () => {
    const [ inputName, setInputName ] = useState('');
    const [ inputSurname, setInputSurname ] = useState('');
    const [ inputAdress, setInputAdress ] = useState('');
    const [ inputEmail, setInputEmail ] = useState('');
    const [ users, setUsers ] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();

        setUsers([{
            name: inputName,
            surName: inputSurname,
            adress: inputAdress,
            email: inputEmail
        }, ...users]);


        setInputName('');
        setInputSurname('');
        setInputEmail('');
        setInputAdress('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:
                        <input 
                            type="text" 
                            value={inputName} 
                            onChange={(event) => setInputName(event.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label>Surname:
                        <input 
                            type="text" 
                            value={inputSurname} 
                            onChange={(event) => setInputSurname(event.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label>Adress:
                        <input 
                            type="text" 
                            value={inputAdress} 
                            onChange={(event) => setInputAdress(event.target.value)} 
                        />
                    </label>
                </div>
                <div>
                    <label>Email:
                        <input 
                            type="text" 
                            value={inputEmail} 
                            onChange={(event) => setInputEmail(event.target.value)} 
                        />
                    </label>
                </div>
                
                <button type="submit">Wyślij</button>
            </form>
            <div>
                <h1>
                    Uzytkownicy:
                </h1>
                { users.map(element => <div>{element.name}</div>)}
            </div>
        </div>
        
    )
}

export default Form;


// Zadanie 2
// Zainstaluj React Developer Tools w przeglądarce
// Wyswietl wszystkie dane uzytkownikow dodawanych przez formularz
// Wykorzystaj reuzywalne komponenty dla calego formularza: Button oraz Utworzyć komponent UserList