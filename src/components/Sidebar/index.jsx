import React from 'react'
import './style.css'
import Logo from '../../assets/Logo.png';
import DashIcon from '../../assets/navIcons/Category.svg'
import TrainingIcon from '../../assets/navIcons/Game.svg'
import LocationIcon from '../../assets/navIcons/Location.svg'
import UsersIcon from '../../assets/navIcons/Ticket Star.svg'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    // const handleSideNav = () => {
    //     setShowSideNav(false)
    //     document.body.style.overflow = 'unset';
    // }

    return (
        <div className='sidebar' >
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className="navBox">
                <ul className="navItems">
                    <NavLink className="navItem" to="/dashboard">
                        <li> <img src={DashIcon} alt="" />Dashboard</li>
                    </NavLink>
                    <NavLink className="navItem" to="/training">
                        <li> <img src={TrainingIcon} alt="" /> Training</li>
                    </NavLink>
                    <NavLink className="navItem" to="/users">
                        <li> <img src={UsersIcon} alt="" /> Users</li>
                    </NavLink>
                    <NavLink className="navItem" to="/analytics">
                        <li> <img src={LocationIcon} alt="" /> Analytics</li>
                    </NavLink>
                    <NavLink className="navItem" to="my-account">
                        <li> <img src={LocationIcon} alt="" /> My Account</li>
                    </NavLink>
                    <NavLink className="navItem" to="support">
                        <li> <img src={LocationIcon} alt="" /> Support</li>
                    </NavLink>
                </ul>

            </div>

        </div>
    )
}

export default Sidebar