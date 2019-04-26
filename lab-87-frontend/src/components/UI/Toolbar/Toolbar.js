import React, {Fragment} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';

const Toolbar = ({user}) => {
    return (
        <Navbar dark color="dark" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Forum</NavbarBrand>
            <Nav className="ml-auto" navbar>
                {user ? (
                    <Fragment>
                        <p style={{color: "#fff", margin: '8px'}}>Hello, {user.username}!</p>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/new/post">Add new post</NavLink>
                        </NavItem>
                    </Fragment>
                ): (
                    <Fragment>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/register">Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/login">Login</NavLink>
                        </NavItem>
                    </Fragment>
                )}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;