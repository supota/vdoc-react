"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Top from "./presentation/Top";
import Sports from "./presentation/Sports";
import Player from "./presentation/Player";
import Form from "./presentation/Form";
import NotFound from "./presentation/NotFound";

import "./public/scss/style.scss";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Top}></Route>

      <Route path="/sports" component={Sports}></Route>

      <Route path="/players/:id(\d+)" component={Player}></Route>

      <Route path="/form" component={Form}></Route>

      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("not-found")
);
