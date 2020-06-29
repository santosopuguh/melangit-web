import React from "react";
import {Navbar, Nav, NavDropdown, OverlayTrigger, Popover} from 'react-bootstrap';
import {PersonFill, Cart3} from "react-bootstrap-icons";

const TopNavigation = () => {

    const cartPopover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Your cart</Popover.Title>
          <Popover.Content>
            Cart is empty. Let's buy our product :)
          </Popover.Content>
        </Popover>
      );

    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#home">Melangit Official</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
       <Nav>
            <Nav.Item>
                <Nav.Link href="#men">Men</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#women">Women</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#kids">Kids</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#kain">Kain</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <NavDropdown title="Others" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#catalog/mask">Mask</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#catalog/women">Scraf</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#catalog/kids">Bag</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#catalog/keychain">Keychain</NavDropdown.Item>
                </NavDropdown>
            </Nav.Item>
            <OverlayTrigger trigger="click" placement="bottom" overlay={cartPopover}>
                <Nav.Link>
                    <Cart3 />
                </Nav.Link>
            </OverlayTrigger>
            <Nav.Link href="account"><PersonFill /></Nav.Link>
        </Nav>
        
        </Navbar.Collapse>
    </Navbar>
    )}

export default TopNavigation;