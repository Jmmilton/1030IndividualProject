import React from "react";
// import "./header.css"

class Nav extends React.Component { 
   render() {
        return (
            <>
                <nav className={`nav ${this.props.extraClass}`} id="nav" >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                        {/* <li><a href="/register">Register</a></li> */}
                        <li><a href="/login">Admin Log In</a></li>
                    </ul>
                </nav>
            </>
        );
    }
};

export default Nav;