import React, {
    useEffect,
    useState
} from "react";

import BaseContainer from "../component/BaseContainer";

import { img } from "@utils/image";
import axios from "@utils/axios";

export default (props) => {
    let [player, setPlayer] = useState({
        "first_name": "",
        "last_name": "",
        "first_roma": "",
        "last_roma": ""
    });
    useEffect(() => {
        const getPlayer = async () => {
            try {
                const playerData = await axios.get(`/players/${props.match.params.id}`);
                setPlayer(playerData.data.player);
            } catch (e) {
                console.log(e);
            }
        }
        getPlayer();
    }, []);
    return (
        <BaseContainer>
            <main className="player">
                <section className="key-visual">
                    <ul className="bread-list">
                        <li><a href=""></a></li>
                    </ul>
                </section>
                <section className="player-detail -purple">
                    <div className="player-icon">
                        <img src={ img(player.image_url) } alt="" id="player-img" />
                        <ul className="sns-share">
                            <li><a href={ "https://www.facebook.com/" + player.facebook_id } id="facebook" target="_blank"><img src={ img("sns/facebook.png") } alt="" /></a></li>
                            <li><a href={ "https://twitter.com/" + player.twitter_id } id="twitter" target="_blank"><img src={ img("sns/twitter.png") } alt="" /></a></li>
                            <li><a href={ player.site_url } id="site" target="_blank"><img src={ img("sns/link.png") } alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="profile-box">
                        <h3>
                            <span id="japanese-name">{ player.first_name + " " + player.last_name }</span>
                            <br className="sp" />
                            <span id="english-name">{ player.first_roma + " " + player.last_roma }</span>
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
        </BaseContainer>
    )
}