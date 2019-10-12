import React from "react";

import { img } from "@utils/image";

export default () => {
    return (
        <main className="player">
            <section className="key-visual">
                <ul className="bread-list">
                    <li><a href=""></a></li>
                </ul>
            </section>
            <section className="player-detail -purple">
                <div className="player-icon">
                    <img src={ img("icon.png") } alt="" id="player-img" />
                    <ul className="sns-share">
                        <li><a href="" id="facebook" target="_blank"><img src={ img("sns/facebook.png") } alt="" /></a></li>
                        <li><a href="" id="twitter" target="_blank"><img src={ img("sns/twitter.png") } alt="" /></a></li>
                        <li><a href="" id="site" target="_blank"><img src={ img("sns/link.png") } alt="" /></a></li>
                    </ul>
                </div>
                <div className="profile-box">
                    <h3>
                        <span id="japanese-name"></span>
                        <br className="sp" />
                        <span id="english-name"></span>
                    </h3>
                    <p id="profile"></p>
                </div>
            </section>
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
    )
}