import { NavLink } from 'react-router-dom';
import { UserType } from '../../../../redux/types/types';
import './User.css';

type ownProps = {
        path: string
}

const User : React.FC<UserType & ownProps> = (props) => (
        <NavLink to={`${props.path}${props.id}`} className="user">
                <img className="user__avatar" alt={props.name} src={`/avatars/${props.id}.png`} />
                <span>
                        {props.name}
                </span>
        </NavLink>
)

export default User;