import React from "react";
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';
import { Nav } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';

function Header() {
    return (
        <Navbar
            color="warning"
            expand="md"
            light
        >
            <NavbarBrand href="/">
                Severino Tasks
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() { }} />
            <Collapse navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/">
                            Dashboard
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;