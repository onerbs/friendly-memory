import React from 'react'

import { Container, Row } from 'react-bootstrap'

import { BrowserRouter as Router } from 'react-router-dom'

import Nave from './nave'
import View from './view'

export default function() {
  return (
    <Container>
      <Row>
        <Router>
          <Nave/>
          <View/>
        </Router>
      </Row>
    </Container>
  )
}
