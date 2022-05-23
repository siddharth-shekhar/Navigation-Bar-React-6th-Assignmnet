import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            {/* <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars /> */}

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>

                <NavLink 
                  to="/Services" 
                  activeStyle={{ color: 'black' }}>
                    Services
                </NavLink>
                <NavLink 
                  to="/Projects" 
                  activeStyle={{ color: 'black' }}>
                    projects
                </NavLink>

                <NavLink 
                  to="/Contact" 
                  activeStyle={{ color: 'black' }}>
                    Contact
                </NavLink>

                <NavLink 
                  to="/Home" 
                  activeStyle={{ color: 'black' }}>
                </NavLink>

                <NavLink 
                  to="/Projects" 
                  activeStyle={{ color: 'black' }}>
                </NavLink>
                {/* <NavBtn>
                    <NavBtnLink to="/Projects">Project</NavBtnLink>                
                </NavBtn> */}
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;