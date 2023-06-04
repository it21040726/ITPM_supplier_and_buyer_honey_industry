import React from 'react'
import { Header } from "../Header/header";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";
import { CategoryHeader } from '../CategoryHeader';

/**
 * @author
 * @function Layout
 **/

export const Layout = (props) => {
    return (
        <>
            <Header />
            {props.sidebar ? (
                <Container fluid className="main">
                    <Row>
                        <Col md={2} className="sidebar">
                            <h3>Categories</h3>
                            <CategoryHeader />
                        </Col>
                        <Col md={10} style={{ marginLeft: "auto", padding: "60px" }}>
                            {props.children}
                        </Col>
                    </Row>
                </Container>
            ) : (
                props.children
            )}
        </>
    );
};