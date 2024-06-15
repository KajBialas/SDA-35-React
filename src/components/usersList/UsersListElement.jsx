import { useState } from "react";

const UsersListElement = ({name, surName, adress, email, handleDeleteUser, handleEditUser}) => {
    const [ inputName, setInputName ] = useState(name);
    const [ inputSurname, setInputSurname ] = useState(surName);
    const [ inputAdress, setInputAdress ] = useState(adress);
    const [ isEditMode, setIsEditMode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        handleEditUser(email, inputName, inputSurname, inputAdress);
    }

    return (
        <li key={email}>
            <p>
                Imię i nazwisko: {name} { surName}
            </p>
            <p>
                Adres: {adress}
            </p>
            <p>
                Email: {email}
            </p>
            <button onClick={() => handleDeleteUser(email)}>Usuń</button>
            <button onClick={() => setIsEditMode(!isEditMode)}>{!isEditMode ? 'Edytuj' : 'Zamknij edycje'}</button>
            {isEditMode && <form onSubmit={handleSubmit}>
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
                <button type="submit">Zapisz uzytkownika</button>
            </form>}
        </li> 
    )
}

export default UsersListElement;