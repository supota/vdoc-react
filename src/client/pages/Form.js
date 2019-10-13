import React from "react";

import BaseContainer from "../component/BaseContainer";

export default () => {
    return (
        <BaseContainer>
            <main className="form">
                <h3>情報を入力するだけで<br />自分のページを作成できます。</h3>
                <form action="">
                    <p>名前</p>
                    <input type="text" placeholder="名前" alt="" />
                    <p>英語の名前</p>
                    <input type="text" placeholder="英語の名前" alt="" />
                    <p>実績</p>
                    <textarea rows="10" placeholder="改行して入力してください"></textarea>
                    <button>確認画面へ</button>
                </form>
            </main>
        </BaseContainer>
    )
}