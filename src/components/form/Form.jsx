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

    const handleDeleteUser = (email) => {
        setUsers(users.filter(user => user.email !== email))
    }

    const handleEditUser = (email, name, surname, adress) => {
        const newUsers = [...users];

        newUsers.forEach(user => {
            if (user.email === email) {
                user.name = name;
                user.surName = surname;
                user.adress = adress;
            }
        });

        setUsers(newUsers);
    }

    // const handleEditUser = (email, name, surname, adress) => {
    //     setUsers(users.map(user => 
    //         user.email === email 
    //             ? { ...user, name, surName: surname, adress }
    //             : user
    //     ));
    // }

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
            <UsersList 
                users={users} 
                handleDeleteUser={handleDeleteUser} 
                handleEditUser={handleEditUser} 
            />
        </div>
        
    )
}

export default Form;

