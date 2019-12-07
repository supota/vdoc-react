import React from "react";

import　"../scss/notfound.scss";

export default () => {
    return (
        <div id="message">
            <h2>404｜Page Not Found</h2>
            <h1>ページが見つかりませんでした</h1>
            <p>指定されたファイルは見つかりませんでした。<br/>URLに誤りがないか確認してください。</p>

            <a href="https://v-doc.supota.com"> TOPに戻る</a>
        </div>
    )
}