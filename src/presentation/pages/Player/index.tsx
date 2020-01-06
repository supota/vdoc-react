import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { BaseContainer } from "vdoc/presentation/pages/component/BaseContainer";

import { ImageProvider } from "vdoc/libs/application/ImageProvider";

import { Player } from "vdoc/libs/domain/models/Player";

import { FirestorePlayerRepository } from "vdoc/libs/infra/firebase/repositories/FirestorePlayerRepository";

interface IProps {
  id: string;
}

const PlayerPage = (props: RouteComponentProps<IProps>) => {
  const [player, setPlayer] = useState(new Player());
  const [loading, setLoading] = useState(true);

  // Get data from firestore
  const firestorePlayerRepository = new FirestorePlayerRepository();
  useEffect(() => {
    (async () => {
      const player: Player = await firestorePlayerRepository.getPlayer(
        props.match.params.id
      );
      if (!player.isExists()) {
        props.history.push("/404");
      }
      setPlayer(player);
      setLoading(false);
    })();
  }, []);

  // render
  if (!loading) {
    return (
      <BaseContainer>
        <main className="player">
          <section className="key-visual">
            <ul className="bread-list">
              <li>
                <a href=""></a>
              </li>
            </ul>
          </section>
          <section className="player-detail -purple">
            <div className="player-icon">
              <img
                src={player.imageUrl}
                alt="プロフィール画像"
                id="player-img"
              />
              <ul className="sns-share">
                <li>
                  <a href={player.facebookUrl} id="facebook" target="_blank">
                    <img src={ImageProvider.Facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href={player.twitterUrl} id="twitter" target="_blank">
                    <img src={ImageProvider.Twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href={player.siteUrl} id="site" target="_blank">
                    <img src={ImageProvider.Link} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="profile-box">
              <h3>
                <span id="japanese-name">
                  {player.japaneseFirstName + " " + player.japaneseLastName}
                </span>
                <br className="sp" />
                <span id="english-name">
                  {player.romanFirstName + " " + player.romanLastName}
                </span>
              </h3>
              <div className="birthday">
                <span>{`${player.year}/${player.month}/${player.day}`}</span>
              </div>
              <p id="profile">{player.profile}</p>
            </div>
          </section>
          <section className="-white achievement">
            <div>
              <h4>実績</h4>
              <ul>
                {player.performances.map(performance => {
                  return <li>{performance}</li>;
                })}
              </ul>
            </div>
          </section>
        </main>
      </BaseContainer>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export { PlayerPage };
