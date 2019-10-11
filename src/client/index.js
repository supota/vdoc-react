"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Top from "./pages/Top";
import Sports from "./pages/Sports";

import "./scss/style.scss";

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={ Top }></Route>
            <Route path="/sports" component={ Sports }></Route>
        </Switch>
        <Footer />
    </BrowserRouter>,
    document.getElementById("body")
)