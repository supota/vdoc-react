import * as React from "react";
import { useState } from "react";

import { BaseContainer } from "vdoc/presentation/pages/component/BaseContainer";

const FormPage = (props: any) => {
  // setup state as object
  const [data, setData] = useState({
    japaneseFirstName: "",
    japaneseLastName: "",
    englishFirstName: "",
    englishLastName: "",
    bio: ""
  });

  // set state in response to input name
  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "japanese_first_name":
        setData(
          Object.assign(data, {
            japaneseFirstName: e.target.value
          })
        );
        break;
      case "japanese_last_name":
        setData(
          Object.assign(data, {
            japaneseLastName: e.target.value
          })
        );
        break;
      case "english_first_name":
        setData(
          Object.assign(data, {
            englishFirstName: e.target.value
          })
        );
        break;
      case "english_last_name":
        setData(
          Object.assign(data, {
            englishLastName: e.target.value
          })
        );
        break;
      case "bio":
        setData(
          Object.assign(data, {
            bio: e.target.value
          })
        );
        break;
      default:
        break;
    }
  };

  // validate and submit state data when button pushed
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <BaseContainer>
      <main className="form">
        <h3>
          情報を入力するだけで
          <br />
          自分のページを作成できます。
        </h3>
        <form action="" onSubmit={handleSubmit}>
          <p>姓</p>
          <input
            type="text"
            placeholder="日本語の姓"
            alt=""
            name="japanese_first_name"
            onChange={handleChange}
            required
          />
          <p>名</p>
          <input
            type="text"
            placeholder="日本語の名"
            alt=""
            name="japanese_last_name"
            onChange={handleChange}
            required
          />
          <p>Surname</p>
          <input
            type="text"
            placeholder="英語の姓"
            alt=""
            name="english_first_name"
            onChange={handleChange}
            required
          />
          <p>Name</p>
          <input
            type="text"
            placeholder="英語の名"
            alt=""
            name="english_last_name"
            onChange={handleChange}
            required
          />
          <select name="sex">
            <option value="0">男性</option>
            <option value="1">女性</option>
            <option value="2">その他</option>
          </select>
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
            onChange={handleChange}
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
      </main>
    </BaseContainer>
  );
};

export { FormPage };
