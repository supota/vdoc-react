import * as React from 'react';
import { useState, useCallback } from 'react';
import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from 'vdoc/modules/auth';
import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';

const LoginPage = withRouter(props => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, []);
  const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, []);

  const state = useSelector(authSelectors.selectAll);

  if (state.isLoggedIn && state.user) {
    props.history.push('/');
  }

  return (
    <BaseContainer>
      <main className="form">
        <h3>
          編集する為に
          <br />
          ログインする必要があります
        </h3>
        <form>
          <ul>
            <li key="mail">
              <div className="ttl">
                <p>メールアドレス</p>
              </div>
              <input
                type="text"
                placeholder="メールアドレスを入力してください"
                onChange={handleEmail}
              />
            </li>
            <li key="password">
              <div className="ttl">
                <p>パスワード</p>
              </div>
              <input
                type="password"
                placeholder="パスワードを入力してください"
                onChange={handlePassword}
              />
              {state.isError ? <p className="error-m">ログインに失敗しました</p> : null}
            </li>
          </ul>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(authActions.requestLogin({
                email: email,
                password: password
              }));
            }}
          >ログインする</button>
        </form>
      </main>
    </BaseContainer>
  );
});

export { LoginPage };
