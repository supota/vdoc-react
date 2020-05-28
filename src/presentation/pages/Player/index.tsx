import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { DomainProvider } from 'vdoc/libs/application/DomainProvider';
import { ImageProvider } from 'vdoc/libs/application/ImageProvider';
import { Player, PlayerID } from 'vdoc/libs/domain/models/Player';
import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';
import { SportsTag } from './SportsTag';

type IProps = RouteComponentProps<{ id: string }>;

const PlayerPage: React.FC<IProps> = props => {
  const [player, setPlayer] = useState<Player | null>(null);

  // Get data from firestore
  const playerRepository = DomainProvider.playerRepo;
  useEffect(() => {
    try {
      (async () => {
        const player: Player = await playerRepository.getPlayer(
          new PlayerID(props.match.params.id)
        );
        setPlayer(player);
      })();
    } catch (e) {
      console.log(e);
      // props.history.push('/404');
    }
  }, []);
  if (!player) {
    return <BaseContainer />;
  }
  return (
    <BaseContainer>
      <main className="player">
        <section className="key-visual">
          <ul className="bread-list">

          </ul>
        </section>
        <section className="player-detail -purple">
          <div className="player-icon">
            <img
              src={player.profilePhotoUrl}
              alt="プロフィール画像"
              id="player-img"
            />
            <ul className="sns-share">
              {player.facebookUrl ?
                <li key="facebook">
                  <a href={player.facebookUrl} id="facebook" target="_blank">
                    <img src={ImageProvider.Facebook} alt="" />
                  </a>
                </li>
                : null}
              {player.twitterUrl ?
                <li key="twitter">
                  <a href={player.twitterUrl} id="twitter" target="_blank">
                    <img src={ImageProvider.Twitter} alt="" />
                  </a>
                </li>
                : null}
              {player.InstagramUrl ?
                <li key="Instagram">
                  <a href={player.InstagramUrl} id="twitter" target="_blank">
                    <img src={ImageProvider.Instagram} alt="" />
                  </a>
                </li>
                : null}
              {player.siteUrl ?
                <li key="site">
                  <a href={player.siteUrl} id="site" target="_blank">
                    <img src={ImageProvider.Link} alt="" />
                  </a>
                </li>
                : null}
            </ul>
          </div>
          <div className="profile-box">
            <SportsTag sportsID={player.sportsID} />
            <h3>
              <span id="japanese-name">{player.name}</span>
              <span id="english-name">{player.phonetic}</span>
            </h3>
            <div className="birthday">
              <span>{player.birthday.getFullYear()}/{player.birthday.getMonth()}/{player.birthday.getDay()}</span>
            </div>
            <p id="profile">{player.profile}</p>
          </div>
        </section>
        <section className="-white achievement">
          <div>
            <h4>実績</h4>
            <ul>
              {player.performances.map(performance => {
                return <li key={ performance }>{performance}</li>;
              })}
            </ul>
          </div>
        </section>
      </main>
    </BaseContainer>
  );
};

export { PlayerPage };
