import React from 'react'

import { Container, Row } from 'react-bootstrap'

import Navigator from './part/Navigator'
import  MainView from './view/MainView'

export default function App() {
  return (
    <Container>
      <Row>
        <Navigator/>
        <MainView/>
      </Row>
    </Container>
  )
}
