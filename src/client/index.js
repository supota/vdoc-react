"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Top from "./pages/Top";
import "./scss/style.scss";

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={ Top }></Route>
        </Switch>
        <Footer />
    </BrowserRouter>,
    document.getElementById("body")
)