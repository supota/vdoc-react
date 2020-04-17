import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { DomainProvider } from 'vdoc/libs/application/DomainProvider';

import { Player } from 'vdoc/libs/domain/models/Player';
import { Sports } from 'vdoc/libs/domain/models/Sports';

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
          props.sports,
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
        console.log(player);
        return (
          <li
            key={player.id.value}
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
