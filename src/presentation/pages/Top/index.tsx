import * as React from "react";

import { BaseContainer } from "vdoc/presentation/pages/component/BaseContainer";

import { ImageProvider } from "vdoc/application/ImageProvider";

const TopPage = () => {
  return (
    <BaseContainer>
      <main>
        <div className="main-visual">
          <h1 className="ttl">
            今まで知らなかったスポーツ、
            <br />
            もっと知って欲しいから。
          </h1>
          <p className="txt">
            V Doc. は「ベンチャースポーツ」のアスリートを紹介し、
            <br />
            みんなで応援していくためのプラットフォーム。
            <br />
            あなたの応援が、誰かを励まし、誰かの人生を変えるきっかけになる。
          </p>
        </div>
        <section className="-purple">
          <h2>今注目のアスリート</h2>
          <ul className="player-list">
            <li className="player-box">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name">田中太郎</p>
            </li>
            <li className="player-box">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name">田中太郎</p>
            </li>
            <li className="player-box">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name">田中太郎</p>
            </li>
            <li className="player-box">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name">田中太郎</p>
            </li>
            <li className="player-box">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name">もっと見る</p>
            </li>
            <li className="player-box"></li>
          </ul>
        </section>
        <section className="-white">
          <h2>興味のあるスポーツから探す</h2>
          <ul className="tag-list">
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
            <li className="tag">
              <a href="">
                <img src={ImageProvider.Tag} alt="" />
              </a>
            </li>
          </ul>
        </section>
        <section className="-purple">
          <h2>いつも使っているSNSのように</h2>
          <div className="comment-box">
            <li className="player-box">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name">田中太郎</p>
            </li>
            <p className="comment">
              ここにサンプルテキスト
              <br />
              ここにサンプルテキスト
              <br />
              ここにサンプルテキスト
              <br />
              ここにサンプルテキスト
            </p>
          </div>
          <div className="comment-box -reverse">
            <li className="player-box">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name">田中太郎</p>
            </li>
            <p className="comment">
              ここにサンプルテキスト
              <br />
              ここにサンプルテキスト
              <br />
              ここにサンプルテキスト
              <br />
              ここにサンプルテキスト
            </p>
          </div>
        </section>
        <section className="-white">
          <div className="promotion-box">
            <img src={ImageProvider.Mock} alt="" />
            <img src={ImageProvider.CatchCopy} alt="" />
          </div>
        </section>
      </main>
    </BaseContainer>
  );
};

export { TopPage };
