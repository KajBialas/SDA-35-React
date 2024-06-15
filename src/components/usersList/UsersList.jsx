import UsersListElement from "./UsersListElement";

const UsersList = ({ users, handleDeleteUser, handleEditUser }) => {
    const renderUsers = () => users.map(user =>(
        <UsersListElement 
            key={user.email}
            name={user.name} 
            surName={user.surName} 
            adress={user.adress} 
            email={user.email} 
            handleDeleteUser={handleDeleteUser}
            handleEditUser={handleEditUser}
        />
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