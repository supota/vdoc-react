import * as React from "react";
import { useState, useCallback } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import { RawPlayer } from "vdoc/libs/domain/models/RawPlayer";

import { DomainProvider } from "vdoc/libs/application/DomainProvider";

import { TextInput } from "../component/TextInput";
import { ImageInput } from "../component/ImageInput";
import { TextArea } from "../component/Textarea";

interface IProps extends RouteComponentProps {}

const NonRouteFormContainer: React.FC<IProps> = props => {
  const [rawPlayer, setRawPlayer] = useState<RawPlayer>(
    new RawPlayer(new DomainProvider.ImageService())
  );
  const [profilePhotoData, setProfilePhotoData] = useState<string | null>(null);
  const [proofPhotoData, setProofPhotoData] = useState<string | null>(null);

  const handleInput = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const name = e.target.name as keyof RawPlayer;
      const value = e.target.value;
      // しっかり書き直す
      if (
        name !== "profilePhotoData" &&
        name !== "proofPhotoData" &&
        name !== "convertToPlayer"
      ) {
        rawPlayer[name] = value;
        setRawPlayer(rawPlayer);
      }
    },
    []
  );

  const handleImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof RawPlayer;
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = e => {
      if (name === "profilePhotoData") {
        setProfilePhotoData(e.target!.result as string);
      } else if (name === "proofPhotoData") {
        setProofPhotoData(e.target!.result as string);
      }
    };
    reader.readAsDataURL(file);
    // しっかり書き直す
    if (name === "profilePhotoData" || name === "proofPhotoData") {
      rawPlayer[name] = file;
      setRawPlayer(rawPlayer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    props.history.push({
      pathname: "/confirm",
      state: {
        rawPlayer: rawPlayer
      }
    });
    /*
    (async () => {
      const player = await rawPlayer.convertToPlayer();
      console.log(player);
    })();
    */
  };

  return (
    <form action="">
      <ul>
        <li>
          <div className="ttl">
            <p>お名前</p>
            <span>必須</span>
          </div>
          <TextInput
            name="name"
            type="text"
            placeholder="名前を入力してください"
            handleChange={handleInput}
            isRequired={true}
          />
        </li>
        <li>
          <div className="ttl">
            <p>フリガナ</p>
            <span>必須</span>
          </div>
          <TextInput
            name="phonetic"
            type="text"
            placeholder="フリナガを入力してください"
            handleChange={handleInput}
            isRequired={true}
          />
        </li>
        <li>
          <div className="ttl">
            <p>誕生日</p>
            <span>必須</span>
          </div>
          <div className="flex">
            <TextInput
              name="year"
              type="number"
              placeholder=""
              handleChange={handleInput}
              isRequired={true}
            />
            <p>年</p>
            <TextInput
              name="month"
              type="number"
              placeholder=""
              handleChange={handleInput}
              isRequired={true}
            />
            <p>月</p>
            <TextInput
              name="day"
              type="number"
              placeholder=""
              handleChange={handleInput}
              isRequired={true}
            />
            <p>日</p>
          </div>
        </li>
        <li>
          <div className="ttl">
            <p>プロフィール</p>
            <span>必須</span>
          </div>
          <TextArea
            name="profile"
            rows={10}
            placeholder="自己紹介など、50文字以上1000文字以内で入力してください"
            handleChange={handleInput}
            isRequired={true}
          />
        </li>
        <li>
          <div className="ttl">
            <p>実績</p>
            <span>必須</span>
          </div>
          <TextArea
            name="performances"
            rows={10}
            placeholder="改行して入力してください。&#13;&#10;例：&#13;&#10;2018年1月1日 マイナースポーツ大阪連盟加入&#13;&#10;2019年1月1日 マイナースポーツ大阪大会準優勝&#13;&#10;2020年1月1日 マイナースポーツ大阪大会東京大会優勝"
            handleChange={handleInput}
            isRequired={false}
          />
        </li>
        <li>
          <div className="ttl">
            <p>Twittr URL</p>
          </div>
          <TextInput
            name="twitterUrl"
            type="text"
            placeholder="TwitterのURL(あれば)"
            handleChange={handleInput}
            isRequired={false}
          />
        </li>
        <li>
          <div className="ttl">
            <p>Facebook URL</p>
          </div>
          <TextInput
            name="facebookUrl"
            type="text"
            placeholder="FacebookのURL(あれば)"
            handleChange={handleInput}
            isRequired={false}
          />
        </li>
        <li>
          <div className="ttl">
            <p>Site URL</p>
          </div>
          <TextInput
            name="siteUrl"
            type="text"
            placeholder="サイトのURL(あれば)"
            handleChange={handleInput}
            isRequired={false}
          />
        </li>
        <li>
          <div className="ttl">
            <p>メールアドレス</p>
            <span>必須</span>
          </div>
          <TextInput
            name="email"
            type="email"
            placeholder="メールアドレスを入力してください"
            handleChange={handleInput}
            isRequired={true}
          />
        </li>
        <li>
          <div className="ttl">
            <p>パスワード</p>
            <span>必須</span>
          </div>
          <TextInput
            name="password"
            type="password"
            placeholder="パスワードを入力してください"
            handleChange={handleInput}
            isRequired={true}
          />
        </li>
        <li className="img">
          <div className="ttl">
            <p>プロフィール写真</p>
            <span>必須</span>
          </div>
          <ImageInput
            name="profilePhotoData"
            type="file"
            handleChange={handleImage}
            isRequired={true}
          />
          <img
            className="preview-img"
            src={profilePhotoData ? profilePhotoData : ""}
            alt=""
          />
        </li>
        <li className="img">
          <div className="ttl">
            <p>証明写真</p>
            <span>必須</span>
          </div>
          <ImageInput
            name="proofPhotoData"
            type="file"
            handleChange={handleImage}
            isRequired={true}
          />
          <img
            className="preview-img"
            src={proofPhotoData ? proofPhotoData : ""}
            alt=""
          />
        </li>
      </ul>
      <button type="submit" onClick={handleSubmit}>
        確認画面へ
      </button>
    </form>
  );
};

const FormContainer = withRouter(NonRouteFormContainer);

export { FormContainer };
