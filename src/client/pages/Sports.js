import React, {
    useState,
    useEffect
} from "react";

import BaseContainer from "../component/BaseContainer";

import { img } from "@utils/image";
import axios from "@utils/axios";
import getRandomNumArray from "@utils/getRandomNumArray";

export default (props) => {
    let [players, setPlayers] = useState([]);
    useEffect(() => {
        const getAllPlayers = async () => {
            try {
                const playersData = await axios.get("/players");
                console.log(playersData);
                // get random 10 players
                const players = getRandomNumArray(playersData.data.players, 10);
                console.log(players);
                setPlayers(players);
            } catch (e) {
                console.log(e);
            }
        }
        getAllPlayers();
    }, []);
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
                    <ul className="player-list" id="player-list">
                        { players.map((player) => {
                            return (
                                <li key={ player.id } className="player-box" onClick={ () => {props.history.push(`/player/${ player.id }`)} }>
                                    <img className="icon" src={ img(player.image_url) }></img>
                                    <p className="name">{ player.first_name + " " + player.last_name }</p>
                                </li>
                            )
                        }) }
                    </ul>
                </section>
            </main>
        </BaseContainer>
    )
}