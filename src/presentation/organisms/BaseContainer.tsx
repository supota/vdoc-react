import * as React from 'react';

import { Header } from 'vdoc/presentation/organisms/Header';
import { Footer } from 'vdoc/presentation/organisms/Footer';

// Add Header and Footer to children component
const BaseContainer = (props: React.Props<{}>) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export { BaseContainer };
