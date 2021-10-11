import React from 'react';
import './SideBar.css';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';

type PropsType = {

}

const SideBar: React.FC<PropsType> = () => (
    <aside className="sidebar">
        <Login />
        <Navbar />
    </aside>
)

export default SideBar;