import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Messaging from './pages/Messaging'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact={true} path='/'>
        <Home />
      </Route>
      <Route exact={true} path='/login'>
        <Login />
      </Route>
      <Route exact={true} path='/messaging'>
        <Messaging />
      </Route>
    </Switch>
  </BrowserRouter>
)