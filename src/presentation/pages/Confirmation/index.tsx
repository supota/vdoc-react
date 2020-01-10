import * as React from "react";
import { useCallback } from "react";
import { RouteComponentProps } from "react-router";

import { RawPlayer } from "vdoc/libs/domain/models/RawPlayer";

import { BaseContainer } from "vdoc/presentation/organisms/BaseContainer";

interface IProps extends RouteComponentProps {}

const ConfirmationPage: React.FC<IProps> = props => {
  if (!props.location.state) {
    props.history.push("/");
    return <div />;
  }
  const rawPlayer: RawPlayer = props.location.state.rawPlayer;

  const goToTop = useCallback(() => {
    props.history.push("/");
  }, []);

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
              <p>{rawPlayer.name}</p>
            </li>
            <li>
              <div className="ttl">
                <p>フリガナ</p>
                <span>必須</span>
              </div>
              <p>{rawPlayer.phonetic}</p>
            </li>
            <li>
              <div className="ttl">
                <p>誕生日</p>
                <span>必須</span>
              </div>
              <p>{`${rawPlayer.year}年${rawPlayer.month}月${rawPlayer.day}年`}</p>
            </li>
            <li>
              <div className="ttl">
                <p>プロフィール</p>
                <span>必須</span>
              </div>
              <p>{rawPlayer.profile}</p>
            </li>
            <li>
              <div className="ttl">
                <p>実績</p>
                <span>必須</span>
              </div>
              <p>{rawPlayer.profile}</p>
            </li>
            <li>
              <div className="ttl">
                <p>Twittr URL</p>
              </div>
              <p>{rawPlayer.twitterUrl ? rawPlayer.twitterUrl : "指定なし"}</p>
            </li>
            <li>
              <div className="ttl">
                <p>Facebook URL</p>
              </div>
              <p>
                {rawPlayer.facebookUrl ? rawPlayer.facebookUrl : "指定なし"}
              </p>
            </li>
            <li>
              <div className="ttl">
                <p>Site URL</p>
              </div>
              <p>{rawPlayer.siteUrl ? rawPlayer.siteUrl : "指定なし"}</p>
            </li>
            <li>
              <div className="ttl">
                <p>メールアドレス</p>
                <span>必須</span>
              </div>
              <p>{rawPlayer.email}</p>
            </li>
            <li>
              <div className="ttl">
                <p>パスワード</p>
                <span>必須</span>
              </div>
              <p>{rawPlayer.password}</p>
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
          <button className="back-btn" onClick={goToTop}>
            戻る
          </button>
        </form>
      </main>
    </BaseContainer>
  );
};

export { ConfirmationPage };
