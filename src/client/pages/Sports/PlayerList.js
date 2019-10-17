import React, {
    useState,
    useEffect
} from "react";
import { withRouter }  from "react-router";

import { img } from "@utils/image";
import axios from "@utils/axios";
import getRandomNumArray from "@utils/getRandomNumArray";

export default withRouter((props) => {
    // setup state
    let [players, setPlayers] = useState([]);

    // get 10 players from api
    useEffect(() => {
        const getAllPlayers = async () => {
            try {
                const playersData = await axios.get("/v1/players");
                
                // get random 10 players
                const players = getRandomNumArray(playersData.data.players, 10);
                setPlayers(players);
            } catch (e) {
                console.log(e);
            }
        }
        getAllPlayers();
    }, []);

    return (
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
    )
})