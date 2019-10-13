import React, {
    useState
} from "react";

import BaseContainer from "../component/BaseContainer";
import axios from "@utils/axios";
import { isString } from "@utils/validate";

export default (props) => {
    const [japaneseName, setJapaneseName] = useState("");
    const [englishName, setEnglishName] = useState("");
    const [bio, setBio] = useState("");

    const handleChange = (e) => {
        switch (e.target.name) {
            case "japanese_name":
                setJapaneseName(e.target.value);
                break;
            case "english_name":
                setEnglishName(e.target.value);
                break;
            case "bio":
                setBio(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/register", {
            japaneseName: japaneseName,
            englishName: englishName,
            bio: bio
        }).then(() => {
            props.history.push("/");
        }).catch((err) => {
            props.history.push("/404");
            console.log(err);
        });
    }

    return (
        <BaseContainer>
            <main className="form">
                <h3>情報を入力するだけで<br />自分のページを作成できます。</h3>
                <form action="">
                    <p>名前</p>
                    <input type="text" placeholder="名前" alt="" name="japanese_name" onChange={ handleChange } />
                    <p>英語の名前</p>
                    <input type="text" placeholder="英語の名前" alt="" name="english_name" onChange={ handleChange } />
                    <p>実績</p>
                    <textarea rows="10" placeholder="改行して入力してください" name="bio" onChange={ handleChange }></textarea>
                    <button onClick={ handleSubmit }>確認画面へ</button>
                </form>
            </main>
        </BaseContainer>
    )
}