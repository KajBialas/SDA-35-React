import { useState } from "react";
import UsersList from "../usersList/UsersList";

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
            <UsersList users={users} />
        </div>
        
    )
}

export default Form;

