import * as React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import { authSelectors } from 'vdoc/modules/auth';

const Header = withRouter(props => {

  const authState = useSelector(authSelectors.selectAuthState);

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
      { authState.isLoggedIn
        ? <div></div>
        : <div className="link">
            <a href="/login">ログイン</a>
            <span></span>
            <a href="/form">選手登録</a>
          </div>
      }
    </header>
  );
});

export { Header };
