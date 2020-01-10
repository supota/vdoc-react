import * as React from "react";

import { BaseContainer } from "vdoc/presentation/organisms/BaseContainer";

const ConfirmationPage = () => {
  return (
    <BaseContainer>
      <main className="form confirm">
        <h3>
          情報が正しいかどうか
          <br />
          確認してください。
        </h3>
        <form action="">
          <ul>
            <li>
              <div className="ttl">
                <p>お名前</p>
                <span>必須</span>
              </div>
              <p>池田逸水</p>
            </li>
            <li>
              <div className="ttl">
                <p>フリガナ</p>
                <span>必須</span>
              </div>
              <p>イケダイッスイ</p>
            </li>
            <li>
              <div className="ttl">
                <p>誕生日</p>
                <span>必須</span>
              </div>
              <p>2019年10月14日</p>
            </li>
            <li>
              <div className="ttl">
                <p>プロフィール</p>
                <span>必須</span>
              </div>
              <p>
                あああああああああああああああああイッスイいいいいいいいいいいでえええええええええす
              </p>
            </li>
            <li>
              <div className="ttl">
                <p>実績</p>
                <span>必須</span>
              </div>
              <p>
                優勝！！！
                <br />
                準優勝！
                <br />
                最下位！
              </p>
            </li>
            <li>
              <div className="ttl">
                <p>Twittr URL</p>
              </div>
              <p>mail@mail.com</p>
            </li>
            <li>
              <div className="ttl">
                <p>Facebook URL</p>
              </div>
              <p>https://facebook.com</p>
            </li>
            <li>
              <div className="ttl">
                <p>Site URL</p>
              </div>
              <p>https://site.com</p>
            </li>
            <li>
              <div className="ttl">
                <p>メールアドレス</p>
                <span>必須</span>
              </div>
              <p>issui@supota.com</p>
            </li>
            <li>
              <div className="ttl">
                <p>パスワード</p>
                <span>必須</span>
              </div>
              <p>password001</p>
            </li>
            <li className="img">
              <div className="ttl">
                <p>プロフィール写真</p>
                <span>必須</span>
              </div>
              <p>写真が入る</p>
            </li>
            <li className="img">
              <div className="ttl">
                <p>証明写真</p>
                <span>必須</span>
              </div>
              <p>証明写真が入る</p>
            </li>
          </ul>
          <button className="send-btn" type="submit">
            送信する
          </button>
          <button className="back-btn" type="submit">
            戻る
          </button>
        </form>
      </main>
    </BaseContainer>
  );
};

export { ConfirmationPage };
