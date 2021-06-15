import './SideBar.css';
import Navbar from './Navbar/Navbar';

type PropsType = {

}

const SideBar: React.FC<PropsType> = () => (
    <div className="sidebar">
        <Navbar />
    </div>
)

export default SideBar;