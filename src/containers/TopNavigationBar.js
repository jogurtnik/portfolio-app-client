import React, { Fragment } from "react"
import { Nav, Navbar, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"

import "./TopNavigationBar.css"

export default () => 
    <Fragment>
        <Navbar id="TopNavigationBar" fluid collapseOnSelect fixedTop={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullLeft>
                    <LinkContainer to="/projects">
                        <NavItem>Projects</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/abouteMe">
                        <NavItem>About me</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <NavItem>Contact</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>  
    </Fragment>