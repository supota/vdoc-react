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
      <div className="link">
        <a href="/login">ログイン</a>
        <span>/</span>
        <a href="/form">選手登録</a>
      </div>
    </header>
  );
});

export { Header };
