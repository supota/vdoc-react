import * as React from "react";

import BaseContainer from "vdoc/presentation/component/BaseContainer";
import PlayerDetail from "vdoc/presentation/Player/PlayerDetail";

export default (props: any) => {
  // render
  return (
    <BaseContainer>
      <main className="player">
        <section className="key-visual">
          <ul className="bread-list">
            <li>
              <a href=""></a>
            </li>
          </ul>
        </section>
        <PlayerDetail id={props.match.params.id} />
        <section className="-white achievement">
          <h2>実績・活動など</h2>
          <div className="swiper-container">
            {/*全スライドをまとめるラッパー*/}
            <div className="swiper-wrapper">
              {/*各スライド*/}
              <div className="swiper-slide">
                <h4>実績</h4>
                <ul>
                  <li>全日本野球選手権大会 BEST 8</li>
                </ul>
              </div>
              <div className="swiper-slide">
                <h4>実績</h4>
                <ul>
                  <li>全日本野球選手権大会 BEST 8</li>
                </ul>
              </div>
              <div className="swiper-slide">
                <h4>実績</h4>
                <ul>
                  <li>全日本野球選手権大会 BEST 8</li>
                  <li>全日本野球選手権大会 BEST 8</li>
                  <li>全日本野球選手権大会 BEST 8</li>
                </ul>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </section>
      </main>
    </BaseContainer>
  );
};
