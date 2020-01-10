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
  let [players, setPlayers] = useState<Player[]>([]);
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
  }, []);

  if (!players.length) {
    return <ul />;
  }

  return (
    <ul className="player-list" id="player-list">
      {players.map(player => {
        console.log(player);
        return (
          <li
            key={player.id}
            className="player-box"
            onClick={() => {
              props.history.push(`/players/${player.id}`);
            }}
          >
            <img className="icon" src={player.profilePhotoUrl}></img>
            <p className="name">
              {player.name}
              <br />
              {player.phonetic}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const PlayerList = withRouter(NonRoutePlayerList);

export { PlayerList };
