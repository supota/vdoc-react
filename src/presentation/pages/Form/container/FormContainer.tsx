import * as React from "react";
import { useState } from "react";

import { Player } from "vdoc/libs/domain/models/Player";
import { RawPlayer } from "vdoc/libs/domain/models/RawPlayer";

import { Input } from "../component/Input";
import { TextArea } from "../component/Textarea";

const FormContainer: React.FC = () => {
  const [rawPlayer, setRawPlayer] = useState<RawPlayer>(new RawPlayer());

  const handleInput = (name: keyof RawPlayer, value: string) => {
    // しっかり書き直す
    if (
      name !== "profilePhotoData" &&
      name !== "proofPhotoData" &&
      name !== "convertToPlayer"
    ) {
      rawPlayer[name] = value;
      setRawPlayer(rawPlayer);
    }
    console.log(rawPlayer);
  };

  const handleImage = (name: keyof RawPlayer, value: Blob) => {
    // しっかり書き直す
    if (name === "profilePhotoData" || name === "proofPhotoData") {
      rawPlayer[name] = value;
      setRawPlayer(rawPlayer);
    }
    console.log(rawPlayer);
  };

  return (
    <form action="">
      <p>姓</p>
      <Input
        name="japaneseFirstName"
        type="text"
        placeholder="日本語の姓"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>名</p>
      <Input
        name="japaneseLastName"
        type="text"
        placeholder="日本語の名"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>Surname</p>
      <Input
        name="romanFirstName"
        type="text"
        placeholder="英語の姓"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>Name</p>
      <Input
        name="romanLastName"
        type="text"
        placeholder="英語の名"
        handleChange={handleInput}
        isRequired={true}
      />
      <p>誕生日</p>
      <Input
        name="year"
        type="number"
        placeholder="年"
        handleChange={handleInput}
        isRequired={true}
      />
      年
      <Input
        name="month"
        type="number"
        placeholder="月"
        handleChange={handleInput}
        isRequired={true}
      />
      月
      <Input
        name="day"
        type="number"
        placeholder="日"
        handleChange={handleInput}
        isRequired={true}
      />
      日<p>プロフィール</p>
      <Input
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
      <textarea
        rows={10}
        placeholder="改行して入力してください"
        name="performances"
        required
      />
      <p>Twittr URL</p>
      <Input
        name="twitterUrl"
        type="text"
        placeholder="TwitterのURL(あれば)"
        handleChange={handleInput}
        isRequired={false}
      />
      <p>Facebook URL</p>
      <Input
        name="facebookUrl"
        type="text"
        placeholder="FacebookのURL(あれば)"
        handleChange={handleInput}
        isRequired={false}
      />
      <p>Site URL</p>
      <Input
        name="siteUrl"
        type="text"
        placeholder="サイトのURL(あれば)"
        handleChange={handleInput}
        isRequired={false}
      />
      <p>メールアドレス</p>
      <Input
        name="email"
        type="email"
        placeholder=""
        handleChange={handleInput}
        isRequired={true}
      />
      <p>パスワード</p>
      <Input
        name="password"
        type="password"
        placeholder=""
        handleChange={handleInput}
        isRequired={true}
      />
      <p>プロフィール写真</p>
      <Input
        name="profilePhotoData"
        type="file"
        placeholder=""
        handleChange={handleImage}
        isRequired={true}
      />
      <p>証明写真</p>
      <Input
        name="proofPhotoData"
        type="file"
        placeholder=""
        handleChange={handleImage}
        isRequired={true}
      />
      <button type="submit">確認画面へ</button>
    </form>
  );
};

export { FormContainer };
