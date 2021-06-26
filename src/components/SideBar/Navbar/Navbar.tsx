import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => (
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
        <NavLink to="/messages" className="navbar__item">
            Messages
        </NavLink>
    </nav>
)

export default Navbar;