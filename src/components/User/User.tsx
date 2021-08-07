import { NavLink } from 'react-router-dom';
import { UserType } from './../../redux/types/types'
import './User.css';

type ownProps = {
        path: string
}

const User: React.FC<UserType & ownProps> = ({ path, id, name }) => (
        <NavLink to={`${path}${id}`} className="user">
                <img className="user__avatar" alt={name} src={`/avatars/${id}.png`} />
                <span>
                        {name}
                </span>
        </NavLink>
)

export default User;