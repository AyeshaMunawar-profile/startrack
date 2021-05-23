import React from "react";
import './Navigation.css';
import Logo from "../Logo/Logo";
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
    return (
        <>
            <Navbar className="nav-bar">
                <NavbarBrand className="p-4">
                    <Logo />
                </NavbarBrand>
                <NavItem className="me-4">
                    <NavLink className='fs-1 pointer link-color-yellow__-1 p-4'>
                        Sign Out
                    </NavLink>
                </NavItem>
            </Navbar>
        </>
    );
}

export default Navigation;
