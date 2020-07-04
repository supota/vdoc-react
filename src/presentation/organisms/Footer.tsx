import * as React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul className="footer-list">
          <li>
            <a href="mailto:info@supota.com">お問い合わせ</a><span>/</span>
            <Link to="/privacy">プライバシーポリシー</Link><span>/</span>
            <Link to="/terms">利用規約</Link>
          </li>
        </ul>
        <p className="footer_copyright">©︎2020 SUPOTA Inc.</p>
      </div>
    </footer>
  );
};

export { Footer };
