"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Top from "./pages/Top";
import Sports from "./pages/Sports";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

import "@scss/style.scss";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Top }></Route>

            <Route path="/sports" component={ Sports }></Route>

            <Route path="/player/:id(\d+)" component={ Player }></Route>
            
            <Route component={ NotFound }></Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById("body")
)