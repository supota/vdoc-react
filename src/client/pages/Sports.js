import React from "react";

import BaseContainer from "../component/BaseContainer";

import { img } from "@utils/image";

export default () => {
    return (
        <BaseContainer>
            <main className="sports">
                <section className="key-visual">
                    <h3 className="name">コーフボール</h3>
                    <p className="desc">ここに概要が入ります。ここに概要が入ります。<br/>ここに概要が入ります。ここに概要が入ります。</p>
                    <ul className="bread-list">
                        <li><a href=""></a></li>
                    </ul>
                </section>
                <section className="newsbox">
                    <h3>最新のニュース</h3>
                    <div className="swiper-container">
                        {/*全スライドをまとめるラッパー*/}
                        <div className="swiper-wrapper">
                            {/*各スライド*/}
                            <div className="swiper-slide"><img src={ img("demo.png") } alt="" /><p>sports</p></div>
                            <div className="swiper-slide"><img src={ img("demo.png") } alt="" /><p>sports</p></div>
                            <div className="swiper-slide"><img src={ img("demo.png") } alt="" /><p>sports</p></div>
                            <div className="swiper-slide"><img src={ img("demo.png") } alt="" /><p>sports</p></div>
                            <div className="swiper-slide"><img src={ img("demo.png") } alt="" /><p>sports</p></div>
                            <div className="swiper-slide"><img src={ img("demo.png") } alt="" /><p>sports</p></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </section>
                <section className="newsbox">
                    <h3>アスリート一覧</h3>
                    <ul className="player-list" id="player-list"></ul>
                </section>
            </main>
        </BaseContainer>
    )
}