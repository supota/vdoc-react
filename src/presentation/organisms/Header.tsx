import * as React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { authSelectors } from 'vdoc/modules/auth';

const Header = withRouter(props => {

  const authState = useSelector(authSelectors.selectAll);

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
        {
          authState.isLoggedIn
            ? <Link to="/mypage">マイページ</Link>
            : <React.Fragment>
                <Link to="/login">ログイン</Link>
                <span></span>
                <Link to="/form">選手登録</Link>
              </React.Fragment>
        }
      </div>
    </header>
  );
});

export { Header };
