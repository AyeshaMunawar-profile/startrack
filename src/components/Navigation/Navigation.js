import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import Logo from "../Logo/Logo";
import { Navbar } from "reactstrap";

const Navigation = ({ isSignedIn }) => {
  return (
    <>
      <Navbar className="nav-bar">
        <div className="p-4">
          <Logo />
        </div>
        {isSignedIn ? (
          <div className="nav-link fs-1 pointer link-color-yellow__-1 p-4">
            <NavLink
              to={"/"}
              style={({ isActive }) => {
                return {
                  display: "inline",
                  color: isActive ? "#ffe25d" : "#ecb100",
                };
              }}
            >
              Sign Out
            </NavLink>
          </div>
        ) : (
          <div className="row-space-between">
            <div className="fs-1 pointer link-color-yellow__-1 p-4">
              <NavLink
                to={"/"}
                style={({ isActive }) => {
                  return {
                    display: "inline",
                    color: isActive ? "#ffe25d" : "#ecb100",
                  };
                }}
              >
                Home
              </NavLink>
            </div>
            <div className="fs-1 pointer link-color-yellow__-1 p-4">
              <NavLink
                to={"/sign-in"}
                style={({ isActive }) => {
                  return {
                    display: "inline",
                    color: isActive ? "#ffe25d" : "#ecb100",
                  };
                }}
              >
                Sign In
              </NavLink>
            </div>
            <div className="fs-1 pointer link-color-yellow__-1 p-4">
              <NavLink
                to={"/sign-up"}
                style={({ isActive }) => {
                  return {
                    display: "inline",
                    color: isActive ? "#ffe25d" : "#ecb100",
                  };
                }}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
