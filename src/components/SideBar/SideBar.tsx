import React from 'react';
import './SideBar.css';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login';

type PropsType = {

}

const SideBar: React.FC<PropsType> = () => (
    <div className="sidebar">
        <Login />
        <Navbar />
    </div>
)

export default SideBar;