import * as React from 'react';

const NotFoundPage = () => {
  return (
    <div id="not-found">
      <div id="message">
        <h2>404｜Page Not Found</h2>
        <h1>ページが見つかりませんでした</h1>
        <p>
          指定されたファイルは見つかりませんでした。
          <br />
          URLに誤りがないか確認してください。
        </p>
        <a href="https://v-doc.supota.com"> TOPに戻る</a>
      </div>
    </div>
  );
};

export { NotFoundPage };
