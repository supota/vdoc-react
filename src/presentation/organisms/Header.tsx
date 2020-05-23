import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { authSelectors, authActions } from 'vdoc/modules/auth';
import {ImageProvider} from "vdoc/libs/application/ImageProvider";

const Header = withRouter(props => {

  const dispatch = useDispatch();
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
            ? <div
                id="icon"
                onClick={() => {
                  if (document.getElementById('icon')) {
                    document.getElementById('icon')!.classList.add('clicked');
                  }
                }}
              >
              <img src={authState.user?.profilePhotoUrl} alt="" />
              <div className="icon-menu">
                <Link to={`/players/${authState.user?.id.value}`}>マイページ</Link>
                <Link to="/edit">プロフィール編集</Link>
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(authActions.requestLogout());
                  }}
                >ログアウト</Link>
              </div>
            </div>
            : <React.Fragment>
                <Link to="/login">ログイン</Link>
                <span>/</span>
                <a target="_blank" href="https://forms.gle/VahQaqNzps5XtBVx9">選手登録</a>
              </React.Fragment>
        }
      </div>
    </header>
  );
});

export { Header };
