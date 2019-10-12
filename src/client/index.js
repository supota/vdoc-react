"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Container from "./component/Container";

import Top from "./pages/Top";
import Sports from "./pages/Sports";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

import "@scss/style.scss";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => { 
                return (<Container Component={ Top } />)
             } }></Route>

            <Route path="/sports" component={ () => {
                return (<Container Component={ Sports } />)
            } }></Route>

            <Route path="/player" component={ () => {
                return (<Container Component={ Player } />)
            } }></Route>
            
            <Route component={ NotFound }></Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById("body")
)