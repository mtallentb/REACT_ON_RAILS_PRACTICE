import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Navigation extends Component  {


    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Mineral Mine</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Buy
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Sell
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Gallery
                    </NavItem>
                </Nav>
            </Navbar>
        );
    };
};
