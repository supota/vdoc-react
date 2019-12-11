"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { TopPage } from "./presentation/pages/Top";
import { SportsPage } from "./presentation/pages/Sports";
import { PlayerPage } from "./presentation/pages/Player";
import { FormPage } from "./presentation/pages/Form";
import { NotFoundPage } from "./presentation/pages/NotFound";

import "./public/scss/style.scss";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={TopPage}></Route>

      <Route path="/sports" component={SportsPage}></Route>

      <Route path="/players/:id(\d+)" component={PlayerPage}></Route>

      <Route path="/form" component={FormPage}></Route>

      <Route component={NotFoundPage}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("not-found")
);
