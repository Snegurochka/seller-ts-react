import { NavLink } from 'react-router-dom';
import './navbar.css';

type PropsType = {
    
}

const Navbar: React.FC<PropsType> = () => (
    <nav className="navbar">
        <NavLink to="/" exact className="navbar__item">
            Dashboard
        </NavLink>
        <NavLink to="/profile" className="navbar__item">
            Seller Profile
        </NavLink>
        <NavLink to="/orders" className="navbar__item">
            Orders history
        </NavLink>
    </nav>
)

export default Navbar;