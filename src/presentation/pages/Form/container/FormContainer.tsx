import * as React from "react";

import { Input } from "../component/Input";
import { Select } from "../component/Select";

const FormContainer: React.FC = () => {
  return (
    <form action="">
      <Input
        title="姓"
        name="japanese_first_name"
        type="text"
        placeholder="日本語の姓"
        isRequired={true}
      />
      <Input
        title="名"
        name="japanese_last_name"
        type="text"
        placeholder="日本語の名"
        isRequired={true}
      />
      <Input
        title="Surname"
        name="roman_first_name"
        type="text"
        placeholder="英語の姓"
        isRequired={true}
      />
      <Input
        title="Name"
        name="roman_last_name"
        type="text"
        placeholder="英語の名"
        isRequired={true}
      />
      <p>誕生日</p>
      <input type="number" name="year" />年
      <input type="number" name="month" />月
      <input type="number" name="day" />日<p>プロフィール</p>
      <input
        type="text"
        placeholder="あなたのプロフィール"
        alt=""
        name="profile"
        required
      />
      <p>実績</p>
      <textarea
        rows={10}
        placeholder="改行して入力してください"
        name="bio"
        required
      />
      <p>Twittr URL</p>
      <input type="text" name="twitterUrl" />
      <p>Facebook URL</p>
      <input type="text" name="facebookUrl" />
      <p>Site URL</p>
      <input type="text" name="siteUrl" />
      <p>メールアドレス</p>
      <input type="text" name="email" />
      <p>パスワード</p>
      <input type="text" name="password" />
      <p>プロフィール</p>
      <input type="file" />
      <p>証明写真</p>
      <input type="file" />
      <button type="submit">確認画面へ</button>
    </form>
  );
};

export { FormContainer };
