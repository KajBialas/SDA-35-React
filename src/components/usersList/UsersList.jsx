const UsersList = ({ users, handleDeleteUser }) => {
    const renderUsers = () => users.map(user =>(
        <li key={user.email}>
            <p>
                Imię i nazwisko: {user.name} { user.surName}
            </p>
            <p>
                Adres: {user.adress}
            </p>
            <p>
                Email: {user.email}
            </p>
            <button onClick={() => handleDeleteUser(user.email)}>Usuń</button>
        </li>
    ));

    return (
        <div>
            <h2>Lista uzytkownikow</h2>
            <ul>
                {renderUsers()}
            </ul>
        </div>
    )
}

export default UsersList;

// Zadanie 3
// Utwórz mozliwość edycji uzytkownika
// - stworzyc nowy formularz
// - moze on się wyswietlac caly czas (kilka formularzy)

// Zadanie 3 - dodatkowe
// Formularz edycji powinien uruchamiac się po kliknięciu przycisku Edytuj