import * as React from "react";
import { useState } from "react";
import { withRouter } from "react-router";

const PlayerList = withRouter((props: any) => {
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
            <img className="icon" src={player.imageUrl}></img>
            <p className="name">{player.first_name + " " + player.last_name}</p>
          </li>
        );
      })}
    </ul>
  );
});

export { PlayerList };