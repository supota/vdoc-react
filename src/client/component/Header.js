import React from "react";
import { withRouter } from "react-router";

export default withRouter(
    (props) => {
        return (
            <header>
                <p className="ttl" onClick={ () => { props.history.push("/") } }>
                    V Doc.
                </p>
            </header>
        )
    }
);