import React, { useState } from "react";
import { UserType } from './../../redux/types/types';

type usersPropsType = {
    users: Array<UserType>
}

const UserSearch: React.FC<usersPropsType> = ({ users }) => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<UserType | undefined>();

    const setNameHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setName(evt.currentTarget.value)
    }

    const searchNameHandler = () => {
        const foundedUser = users.find((user) => user.name === name);
        if (foundedUser) {
            setUser(foundedUser);
        }
    }

    return (
        <div className="search">
            <input type="text" name="userSearch" onChange={setNameHandler} value={name} />
            <button onClick={searchNameHandler}>Search</button>
            <div>
                {user && user.name}
            </div>
        </div>
    );
}

export default UserSearch;