import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {getSellerData} from '../../redux/actions/auth-actions';

const Login = () => {
    useEffect(() => {
        const res = getSellerData();
      
    }, []);

    return (
        <div className="login-block">
            {/* {
                props.isAuth
                    ? props.login
                    : <NavLink to='/login'>login</NavLink>
            } */}
            <NavLink to='/login'>login</NavLink>

        </div>
    )
}

export default Login;