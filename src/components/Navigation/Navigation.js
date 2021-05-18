import React from "react";
import './Navigation.css';
import Logo from "../Logo/Logo";

const Navigation = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="pa4">
                    <Logo/>
                </div>
                <p className='f2 link dim underline pa4 pointer text-off-white__0 pt6 pr5'>
                    Sign Out
                </p>
            </nav>
        </>
    );
}

export default Navigation;
