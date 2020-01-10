import * as React from "react";
import { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router";

import { DomainProvider } from "vdoc/libs/application/DomainProvider";

import { Player } from "vdoc/libs/domain/models/Player";
import { Sports } from "vdoc/libs/domain/models/Sports";

interface IProps extends RouteComponentProps<{}> {
  sports: Sports;
}

const NonRoutePlayerList = (props: IProps) => {
  // setup state
  let [players, setPlayers] = useState<Player[]>([new Player()]);
  const playerRepository = new DomainProvider.PlayerRepository();

  useEffect(() => {
    (async () => {
      try {
        const players = await playerRepository.getPlayerFromSports(
          props.sports
        );
        setPlayers(players);
      } catch {
        props.history.push("/404");
      }
    })();
  });

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
};

const PlayerList = withRouter(NonRoutePlayerList);

export { PlayerList };
