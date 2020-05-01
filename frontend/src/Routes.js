import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/home">
        <Home />
      </Route>
      <Route exact={true} path="/login">
        <Login />
      </Route>
      <Route exact={true} path="/">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);
