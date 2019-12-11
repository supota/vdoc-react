import * as React from "react";

import { BaseContainer } from "vdoc/presentation/pages/component/BaseContainer";
import { PlayerList } from "vdoc/presentation/pages/Sports/PlayerList";

import { ImageProvider } from "vdoc/application/ImageProvider";

const SportsPage = () => {
  return (
    <BaseContainer>
      <main className="sports">
        <section className="key-visual">
          <h3 className="name">コーフボール</h3>
          <p className="desc">
            ここに概要が入ります。ここに概要が入ります。
            <br />
            ここに概要が入ります。ここに概要が入ります。
          </p>
          <ul className="bread-list">
            <li>
              <a href=""></a>
            </li>
          </ul>
        </section>
        <section className="newsbox">
          <h3>最新のニュース</h3>
          <div className="swiper-container">
            {/*全スライドをまとめるラッパー*/}
            <div className="swiper-wrapper">
              {/*各スライド*/}
              <div className="swiper-slide">
                <img src={ImageProvider.Demo} alt="" />
                <p>sports</p>
              </div>
              <div className="swiper-slide">
                <img src={ImageProvider.Demo} alt="" />
                <p>sports</p>
              </div>
              <div className="swiper-slide">
                <img src={ImageProvider.Demo} alt="" />
                <p>sports</p>
              </div>
              <div className="swiper-slide">
                <img src={ImageProvider.Demo} alt="" />
                <p>sports</p>
              </div>
              <div className="swiper-slide">
                <img src={ImageProvider.Demo} alt="" />
                <p>sports</p>
              </div>
              <div className="swiper-slide">
                <img src={ImageProvider.Demo} alt="" />
                <p>sports</p>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </section>
        <section className="newsbox">
          <h3>アスリート一覧</h3>
          <PlayerList />
        </section>
      </main>
    </BaseContainer>
  );
};

export { SportsPage };
