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

export default function Navigator() {
  return(
    <Col md={3}>
      <Navbar className="menu-desplegable" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/all">
              <FontAwesomeIcon icon={faCalendarAlt}/>&nbsp;Todo
            </Nav.Link>
            <Nav.Link href="/today">
              <FontAwesomeIcon icon={faCalendarDay}/>&nbsp;Hoy
            </Nav.Link>
            <Nav.Link href="/next-week">
              <FontAwesomeIcon icon={faCalendarMinus}/>&nbsp;Proxima semana
            </Nav.Link>
            <Nav.Link href="/finished">
              <FontAwesomeIcon icon={faCalendarCheck}/>&nbsp;Completado
            </Nav.Link>

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/work">Trabajo</NavDropdown.Item>
              <NavDropdown.Item href="/category/watch-list">Películas por ver</NavDropdown.Item>
              <NavDropdown.Item href="/category/cart">Lista de compras</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  )
}
