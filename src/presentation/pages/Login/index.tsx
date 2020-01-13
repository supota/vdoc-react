import * as React from "react";

import { BaseContainer } from "vdoc/presentation/organisms/BaseContainer";

const LoginPage: React.FC = () => {
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
              />
            </li>
            <li>
              <div className="ttl">
                <p>パスワード</p>
              </div>
              <input type="text" placeholder="パスワードを入力してください" />
            </li>
          </ul>
          <button type="submit">ログインする</button>
        </form>
      </main>
    </BaseContainer>
  );
};

export { LoginPage };
