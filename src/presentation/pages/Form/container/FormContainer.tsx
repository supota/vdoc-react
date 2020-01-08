import * as React from "react";
import { useState, useCallback } from "react";

import { RawPlayer } from "vdoc/libs/domain/models/RawPlayer";

import { DomainProvider } from "vdoc/libs/application/DomainProvider";

import { TextInput } from "../component/TextInput";
import { ImageInput } from "../component/ImageInput";
import { TextArea } from "../component/Textarea";

const FormContainer: React.FC = () => {
  const [rawPlayer, setRawPlayer] = useState<RawPlayer>(
    new RawPlayer(new DomainProvider.ImageService())
  );

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
    // しっかり書き直す
    if (name === "profilePhotoData" || name === "proofPhotoData") {
      rawPlayer[name] = file;
      setRawPlayer(rawPlayer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (async () => {
      const player = await rawPlayer.convertToPlayer();
      console.log(player);
    })();
  };

  return (
    <form action="">
      <p>姓</p>
      <TextInput
        name="japaneseFirstName"
        type="text"
        placeholder="日本語の姓"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>名</p>
      <TextInput
        name="japaneseLastName"
        type="text"
        placeholder="日本語の名"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>Surname</p>
      <TextInput
        name="romanFirstName"
        type="text"
        placeholder="英語の姓"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>Name</p>
      <TextInput
        name="romanLastName"
        type="text"
        placeholder="英語の名"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>誕生日</p>
      <TextInput
        name="year"
        type="number"
        placeholder="年"
        handleChange={handleInput}
        isRequired={true}
      />
      年
      <TextInput
        name="month"
        type="number"
        placeholder="月"
        handleChange={handleInput}
        isRequired={true}
      />
      月
      <TextInput
        name="day"
        type="number"
        placeholder="日"
        handleChange={handleInput}
        isRequired={true}
      />
      日<p>プロフィール</p>
      <TextInput
        name="profile"
        type="text"
        placeholder="自己紹介など"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>実績</p>
      <TextArea
        name="performances"
        rows={10}
        placeholder="改行して入力してください"
        handleChange={handleInput}
        isRequired={false}
      />
      <p>Twittr URL</p>
      <TextInput
        name="twitterUrl"
        type="text"
        placeholder="TwitterのURL(あれば)"
        handleChange={handleInput}
        isRequired={false}
      />
      <p>Facebook URL</p>
      <TextInput
        name="facebookUrl"
        type="text"
        placeholder="FacebookのURL(あれば)"
        handleChange={handleInput}
        isRequired={false}
      />
      <p>Site URL</p>
      <TextInput
        name="siteUrl"
        type="text"
        placeholder="サイトのURL(あれば)"
        handleChange={handleInput}
        isRequired={false}
      />
      <p>メールアドレス</p>
      <TextInput
        name="email"
        type="email"
        placeholder=""
        handleChange={handleInput}
        isRequired={true}
      />
      <p>パスワード</p>
      <TextInput
        name="password"
        type="password"
        placeholder=""
        handleChange={handleInput}
        isRequired={true}
      />
      <p>プロフィール写真</p>
      <ImageInput
        name="profilePhotoData"
        type="file"
        handleChange={handleImage}
        isRequired={true}
      />
      <p>証明写真</p>
      <ImageInput
        name="proofPhotoData"
        type="file"
        handleChange={handleImage}
        isRequired={true}
      />
      <button type="submit" onClick={handleSubmit}>
        確認画面へ
      </button>
    </form>
  );
};

export { FormContainer };
