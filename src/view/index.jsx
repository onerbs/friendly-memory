import React from 'react'

import { Col } from 'react-bootstrap'

import { Switch, Route } from 'react-router-dom'

import X404 from './X404'

export default function() {
  return (
    <Col lg={9} md={9} sm={9}>
      <Switch>
        <Route exact path='/'>
          <p>home</p>
        </Route>
        <Route path='/all'>
          <p>all</p>
        </Route>
        <Route path='/today'>
          <p>today</p>
        </Route>
        <Route path='/next-week'>
          <p>next-week</p>
        </Route>
        <Route path='/finished'>
          <p>finished</p>
        </Route>
        <Route path='/category/:category'>
          <p>Category:</p>
        </Route>
        <Route><X404/></Route>
      </Switch>
    </Col>
  )
}
