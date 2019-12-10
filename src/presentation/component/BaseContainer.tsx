import * as React from "react";

import { Header } from "vdoc/presentation/component/Header";
import { Footer } from "vdoc/presentation/component/Footer";

// add Header and Footer to children component
const BaseContainer = (props: any) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export { BaseContainer };
