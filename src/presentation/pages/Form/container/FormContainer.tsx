import * as React from "react";
import { useState } from "react";

import { Input } from "../component/Input";
import { Select } from "../component/Select";

const FormContainer: React.FC = () => {
  const [playerData, setPlayerData] = useState({
    japaneseFirstName: null,
    japaneseLastName: null,
    romanFirstName: null,
    romanLastName: null,
    year: null,
    month: null,
    day: null,
    profile: null,
    performances: [],
    twitterUrl: null,
    facebookUrl: null,
    siteUrl: null,
    email: null,
    password: null
  });
  const handleInput = (name: string, value: string) => {
    setPlayerData({
      ...playerData,
      [name]: value
    });
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
      <input type="file" />
      <p>証明写真</p>
      <input type="file" />
      <button type="submit">確認画面へ</button>
    </form>
  );
};

export { FormContainer };
