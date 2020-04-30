import * as React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { authSelectors } from 'vdoc/modules/auth';
import {ImageProvider} from "vdoc/libs/application/ImageProvider";

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
      <div className="link">
        {
          authState.isLoggedIn
            ? <div
                id="icon"
                onClick={() => {
                  document.getElementById('icon')?.classList.add('clicked');
                }}
              >
              <img src={ImageProvider.Icon} alt="" />
              <div className="icon-menu">
                <a href="">プロフィール編集</a>
                <a href="">ログアウト</a>
              </div>
            </div>
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
