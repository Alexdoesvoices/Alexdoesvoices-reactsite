
// Filename - "./components/Navbar.js
 
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to="/Alexdoesvoices-reactsite" activeStyle>
                Home
                </NavLink>
                    <NavLink to="/About" activeStyle>
                        About
                    </NavLink>
                    {/* <NavLink to="/gear" activeStyle>
                        gear */}
                    {/* </NavLink> */}
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink to="/Equipments" activeStyle>
                        Equipment
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
