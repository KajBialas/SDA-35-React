const UsersList = ({ users }) => {
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