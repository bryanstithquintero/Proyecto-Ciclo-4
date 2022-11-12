import React, { Component } from 'react'
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

export default class Navegacion extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky='top'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand><NavLink className="link" to="/Home">MAQUINARIA</NavLink></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><NavLink className="link" to="/Home">Principal</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="link" to="/Equipos">Equipos</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="link" to="/ListaEquipos">Lista de Equipos</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="link" to="/Usuarios">Lista Usuarios</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Usuario
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><NavLink className="link-cerrar" to="/">Cerrar Sesion</NavLink></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        )
    }
}
