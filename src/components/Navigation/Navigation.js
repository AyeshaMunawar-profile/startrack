import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <>
      <Navbar className="nav-bar">
        <NavbarBrand className="p-4">
          <Logo />
        </NavbarBrand>
        {isSignedIn ? (
          <NavItem className="me-4">
            <NavLink
              className="fs-1 pointer link-color-yellow__-1 p-4"
              onClick={() => onRouteChange("sign-in")}
            >
              Sign Out
            </NavLink>
          </NavItem>
        ) : (
          <div className="row-space-between">
            <NavItem className="me-4">
              <NavLink
                className="fs-1 pointer link-color-yellow__-1 p-4"
                onClick={() => onRouteChange("sign-in")}
              >
                Sign In
              </NavLink>
            </NavItem>
            <NavItem className="me-4">
              <NavLink
                className="fs-1 pointer link-color-yellow__-1 p-4"
                onClick={() => onRouteChange("sign-up")}
              >
                Sign Up
              </NavLink>
            </NavItem>
          </div>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
