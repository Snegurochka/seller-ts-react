import { UserType } from './../../redux/types/types';
//components
import User from '../User/User';
import UserSearch from '../UserSearch/UserSearch';
import './Users.css';

type usersPropsType = {
    users: Array<UserType>
}

const Users: React.FC<usersPropsType> = ({ users }) => {
    const usersComponents = users.map((user) => <User path="/messages/" id={user.id} key={user.id} name={user.name} />);

    return (
        <div className="users">
            <UserSearch users={users} />
            {usersComponents}
        </div>
    );
}

export default Users;