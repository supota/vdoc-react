import * as React from 'react';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sportsListSelectors } from 'vdoc/modules/sportsList';
import { Player } from 'vdoc/libs/domain/models/Player';
import { ImageProvider } from 'vdoc/libs/application/ImageProvider';
import { DomainProvider } from 'vdoc/libs/application/DomainProvider';
import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';

const TopPage = withRouter((props) => {

  const [players, setPlayers] = useState<Player[] | null>(null);

  useEffect(() => {
    (async () => {
      const players = await DomainProvider.playerRepo.getPlayersRandamBasedNum(5);
      setPlayers(players);
    })();
  }, []);

  const sportsListState = useSelector(sportsListSelectors.selectAll);
  if (sportsListState.isLoading || players === null) {
    // Todo Loading画面に
    return <div />;
  }

  return (
    <BaseContainer>
      <main>
        <div className="main-visual">
          <h1 className="ttl">
            今まで知らなかったスポーツ、
            <br />
            もっと知って欲しいから。
          </h1>
          <p className="txt">
            V Doc. は「ベンチャースポーツ」のアスリートを紹介し、
            <br />
            みんなで応援していくためのプラットフォーム。
            <br />
            あなたの応援が、誰かを励まし、誰かの人生を変えるきっかけになる。
          </p>
          <a target="_blank" className="pre-btn" href="https://forms.gle/VahQaqNzps5XtBVx9">
            選手登録はこちら
          </a>
        </div>
        <section className="-purple">
          <h2>今注目のアスリート</h2>
          <ul className="player-list">
            {
              players.map(player => (
                <li className="player-box" key={player.id.value}>
                  <Link to={'/players/' + player.id.value} className="icon">
                    <img src={player.profilePhotoUrl} alt="" />
                  </Link>
                  <Link to={'/players/' + player.id.value} className="name">{player.name}</Link>
                </li>
              ))
            }
            <li className="player-box"></li>
          </ul>
        </section>
        <section className="-white">
          <h2>興味のあるスポーツから探す</h2>
          <ul className="tag-list">
            {sportsListState.sports.map((sports) => {
              return (
                <li className="tag" key={sports.id.value}>
                  <Link to={'/sports/' + sports.id.value}>
                    <span></span>
                    {sports.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="-purple">
          <h2>ユーザーの声</h2>
          <div className="comment-box">
            <li className="player-box" key="example">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name"></p>
            </li>
            <p className="comment">
              一目で今までの活動が分かるページが作れたのでとても良かったです！
            </p>
          </div>
          <div className="comment-box -reverse">
            <li className="player-box" key="example-2">
              <img className="icon" src={ImageProvider.Icon} alt="" />
              <p className="name"></p>
            </li>
            <p className="comment">
              興味のあったマイナースポーツに取り組むアスリートを、簡単に見つけることができました。
            </p>
          </div>
        </section>
        <section className="-white">
          <div className="promotion-box">
            <img src={ImageProvider.Mock} alt="" />
            <img src={ImageProvider.CatchCopy} alt="" />
          </div>
        </section>
      </main>
    </BaseContainer>
  );
});

export { TopPage };
