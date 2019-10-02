import React, { Component } from "react"
import { Nav, Navbar, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import Routes from "./Routes"

import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      prop: "mockProp"
    }
  }
  render() {
    const childProps = {
      prop: this.state.prop
    }
    return (
        <div className="App container">
        <Navbar fluid collapseOnSelect>
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
            <Nav pullRight>
              <NavItem>Dark mode:</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    )
  }
}

export default App
