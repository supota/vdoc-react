import * as React from "react";
import { useState } from "react";
import { withRouter } from "react-router";

import { img } from "../../utils/image";

export default withRouter((props: any) => {
  // setup state
  let [players, setPlayers] = useState([]);

  return (
    <ul className="player-list" id="player-list">
      {players.map((player: any) => {
        return (
          <li
            key={player.id}
            className="player-box"
            onClick={() => {
              props.history.push(`/player/${player.id}`);
            }}
          >
            <img className="icon" src={img(player.image_url)}></img>
            <p className="name">{player.first_name + " " + player.last_name}</p>
          </li>
        );
      })}
    </ul>
  );
});
