import React, {Fragment} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import UserMenu from "./Menus/UserMenus";
import AnonymousMenu from "./Menus/AnonymousMenu";

const Toolbar = ({user, logout}) => {
    return (
        <Navbar dark color="dark" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Forum</NavbarBrand>
            <Nav className="ml-auto" navbar>
                {user ?
                    <Fragment>
                        <NavItem>
                            <NavLink tag={RouterNavLink} to="/new/post">Add new post</NavLink>
                        </NavItem>
                        <UserMenu user={user} logout={logout}/>
                    </Fragment> : <AnonymousMenu/>}
            </Nav>
        </Navbar>
    );
};

export default Toolbar;