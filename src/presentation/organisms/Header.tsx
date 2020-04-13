import * as React from 'react';
import { withRouter } from 'react-router';

const Header = withRouter(props => {
  return (
    <header>
      <p
        className="ttl"
        onClick={() => {
          props.history.push('/');
        }}
      >
        V Doc.
      </p>
    </header>
  );
});

export { Header };
