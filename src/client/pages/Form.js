import React, {
    useState
} from "react";

import BaseContainer from "@component/BaseContainer";
import axios from "@utils/axios";

export default (props) => {
    // setup state as object
    const [data, setData] = useState({
        japaneseFirstName: "",
        japaneseLastName: "",
        englishFirstName: "",
        englishLastName: "",
        bio: ""
    });

    // set state in response to input name
    const handleChange = (e) => {
        switch (e.target.name) {
            case "japanese_first_name":
                setData(Object.assign(data, {
                    "japaneseFirstName": e.target.value
                }));
                break;
            case "japanese_last_name":
                setData(Object.assign(data, {
                    "japaneseLastName": e.target.value
                }));
                break;
            case "english_first_name":
                setData(Object.assign(data, {
                    "englishFirstName": e.target.value
                }));
                break;
            case "english_last_name":
                setData(Object.assign(data, {
                    "englishLastName": e.target.value
                }));
                break;
            case "bio":
                setData(Object.assign(data, {
                    "bio": e.target.value
                }));
                break;
            default:
                break;
        }
    }

    // validate and submit state data when button pushed
    const handleSubmit = () => {
        // trim and eliminate blank line in bio
        axios.post("/register", Object.assign(data, {
            bio: data.bio.trim().split("\n").filter(line => line != "")
        }))
        .then(() => {
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
                    <p>姓</p>
                    <input type="text" placeholder="日本語の姓" alt="" name="japanese_first_name" onChange={ handleChange } required />
                    <p>名</p>
                    <input type="text" placeholder="日本語の名" alt="" name="japanese_last_name" onChange={ handleChange } required />
                    <p>Surname</p>
                    <input type="text" placeholder="英語の姓" alt="" name="english_first_name" onChange={ handleChange } required />
                    <p>Name</p>
                    <input type="text" placeholder="英語の名" alt="" name="english_last_name" onChange={ handleChange } required />
                    <p>実績</p>
                    <textarea rows="10" placeholder="改行して入力してください" name="bio" onChange={ handleChange } required />
                    <button onClick={ handleSubmit }>確認画面へ</button>
                </form>
            </main>
        </BaseContainer>
    )
}