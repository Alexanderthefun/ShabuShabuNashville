import React from "react";
import { Route, Router, NavLink as RRNavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div className="navContainer">
            <nav className="navbar">
                <>
                    <RRNavLink className="nav-link" to="/">
                        Home
                    </RRNavLink>
                    <RRNavLink className="nav-link">|</RRNavLink>
                    <RRNavLink className="nav-link" to="/about">
                        About
                    </RRNavLink>
                    <RRNavLink className="nav-link">|</RRNavLink>
                    <RRNavLink className="nav-link" to="/broths">
                        Broths
                    </RRNavLink>
                    <RRNavLink className="nav-link">|</RRNavLink>
                    <RRNavLink className="nav-link" to="/drinks">
                        Drinks
                    </RRNavLink>
                </>


            </nav>
        </div>
    )
}