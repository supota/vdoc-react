import * as React from 'react';

import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';
import { AuthHoc } from 'vdoc/presentation/organisms/AuthHoc';

const MyPage = () => {
  return (
    <AuthHoc>
      <BaseContainer>
        <main className="confirm form">

          <h3>
            マイページ
        </h3>
          <form action="">
            <ul>
              <li>
                <div className="ttl">
                  <p>お名前</p>
                </div>
                <p>テキスト</p>
              </li>
              <li>
                <div className="ttl">
                  <p>フリガナ</p>
                </div>
                <p>テキスト</p>
              </li>
              <li>
                <div className="ttl">
                  <p>誕生日</p>
                </div>
                <p>2000年1月1日</p>
              </li>
              <li>
                <div className="ttl">
                  <p>プロフィール</p>
                </div>
                <p>テキスト</p>
              </li>
              <li>
                <div className="ttl">
                  <p>実績</p>
                </div>
                <p>テキスト</p>
              </li>
              <li>
                <div className="ttl">
                  <p>Twittr URL</p>
                </div>
                <p>テキスト</p>
              </li>
              <li>
                <div className="ttl">
                  <p>Facebook URL</p>
                </div>
                <p>テキスト</p>
              </li>
              <li>
                <div className="ttl">
                  <p>Site URL</p>
                </div>
                <p>テキスト</p>
              </li>
              <li>
                <div className="ttl">
                  <p>メールアドレス</p>
                </div>
                <p>テキスト</p>
              </li>
              <li>
                <div className="ttl">
                  <p>パスワード</p>
                </div>
                <p>テキスト</p>
              </li>
              <li className="img">
                <div className="ttl">
                  <p>プロフィール写真</p>
                </div>
                <img
                  className="preview-img"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </li>
            </ul>
            <button type="submit">
              編集画面へ
          </button>
          </form>
        </main>
      </BaseContainer>
    </AuthHoc>
  );
};

export { MyPage };
