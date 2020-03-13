import React from 'react'
import {
  Col,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap'
import {
  faCalendarAlt,
  faCalendarCheck,
  faCalendarDay,
  faCalendarMinus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

export default function() {
  return(
    <Col lg={3} md={3} sm={3}>
      <Navbar className="menu-desplegable" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/all">
              <FontAwesomeIcon icon={faCalendarAlt}/>&nbsp;Todo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/today">
              <FontAwesomeIcon icon={faCalendarDay}/>&nbsp;Hoy
            </Nav.Link>
            <Nav.Link as={NavLink} to="/next-week">
              <FontAwesomeIcon icon={faCalendarMinus}/>&nbsp;Proxima semana
            </Nav.Link>
            <Nav.Link as={NavLink} to="/finished">
              <FontAwesomeIcon icon={faCalendarCheck}/>&nbsp;Completado
            </Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/work">Trabajo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/watch-list">Películas por ver</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/cart">Lista de compras</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  )
}
