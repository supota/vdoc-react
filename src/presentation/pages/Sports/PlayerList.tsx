import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { DomainProvider } from 'vdoc/libs/application/DomainProvider';

import { Player } from 'vdoc/libs/domain/models/Player';
import { Sports } from 'vdoc/libs/domain/models/Sports';
import {Link} from "react-router-dom";

interface IProps extends RouteComponentProps<{}> {
  sports: Sports;
}

const NonRoutePlayerList = (props: IProps) => {
  // setup state
  const [players, setPlayers] = useState<Player[]>([]);
  const playerRepository = DomainProvider.playerRepo;

  useEffect(() => {
    (async () => {
      try {
        const players = await playerRepository.getPlayerFromSports(
          props.sports.id,
        );
        setPlayers(players);
      } catch {
        props.history.push('/404');
      }
    })();
  }, []);

  if (!players.length) {
    return <ul />;
  }

  return (
    <ul className="player-list" id="player-list">

      {players.map(player => {
        return (
          <li
            key={player.id.value}
            className="player-box"
            onClick={() => {
              props.history.push(`/players/${player.id.value}`);
            }}
          >
            <Link to={'/players/' + player.id.value} className="icon">
              <img src={player.profilePhotoUrl} alt="" />
            </Link>
            <Link to={'/players/' + player.id.value} className="name">{player.name}</Link>
          </li>
        );
      })}
      <li className="player-box"></li>
      <li className="player-box"></li>
      <li className="player-box"></li>
    </ul>
  );
};

const PlayerList = withRouter(NonRoutePlayerList);

export { PlayerList };
