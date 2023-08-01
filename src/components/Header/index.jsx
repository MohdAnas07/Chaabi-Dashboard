import React from 'react'
import './style.css';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        <div className='header'>
            <div className="header_wrapper">
                <h1>hello, {isAuthenticated && user.name}</h1>
                <p>following is your organization’s performance summary</p>
            </div>

            {
                isAuthenticated ?
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button> :
                    <button onClick={() => loginWithRedirect()}>Log In</button>
            }
        </div>
    )
}

export default Header