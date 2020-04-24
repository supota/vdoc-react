import * as React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/"> TOPに戻る</Link>
      </div>
    </div>
  );
};

export { NotFoundPage };
