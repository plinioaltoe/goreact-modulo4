import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Browse from '../../src/pages/browse'
// import { Container } from './styles';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
  </Switch>
)

export default Routes
