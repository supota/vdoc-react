import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { DomainProvider } from 'vdoc/libs/application/DomainProvider';
import { ImageProvider } from 'vdoc/libs/application/ImageProvider';

import { Player, PlayerID } from 'vdoc/libs/domain/models/Player';

import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';

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
              <li key="facebook">
                <a href={player.facebookUrl} id="facebook" target="_blank">
                  <img src={ImageProvider.Facebook} alt="" />
                </a>
              </li>
              <li key="twitter">
                <a href={player.twitterUrl} id="twitter" target="_blank">
                  <img src={ImageProvider.Twitter} alt="" />
                </a>
              </li>
              <li key="site">
                <a href={player.siteUrl} id="site" target="_blank">
                  <img src={ImageProvider.Link} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="profile-box">
            <ul className="profile-tag">
              <li className="tag">
                <a href={'/sports/'}>
                  <span></span>
                  クィディッチ
                </a>
              </li>
              <li className="tag">
                <a href={'/sports/'}>
                  <span></span>
                  サッカー
                </a>
              </li>
            </ul>
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
