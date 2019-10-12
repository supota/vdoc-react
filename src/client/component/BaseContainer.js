import React from "react";

import Header from "./Header";
import Footer from "./Footer";

// add Header and Footer to children component
export default (props) => {
    return (
        <React.Fragment>
            <Header />
            { props.children }
            <Footer />
        </React.Fragment>
    )
}