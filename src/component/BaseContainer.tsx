import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

// add Header and Footer to children component
export default (props: any) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};
