import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';


/**
* @author
* @function Header
**/

export const Header = (props) => {
    const dispatch = useDispatch()

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
            <Container fluid>
                <Navbar.Brand href="/">Joy Honey</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}