import * as React from 'react';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from 'vdoc/modules/auth';

import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';

const LoginPage: React.FC = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, []);
  const handlePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, []);

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
            <li>
              <div className="ttl">
                <p>メールアドレス</p>
              </div>
              <input
                type="text"
                placeholder="メールアドレスを入力してください"
                onChange={handleEmail}
              />
            </li>
            <li>
              <div className="ttl">
                <p>パスワード</p>
              </div>
              <input
                type="text"
                placeholder="パスワードを入力してください"
                onChange={handlePassword}
              />
            </li>
          </ul>
          <button
            onClick={() => {
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
};

export { LoginPage };
