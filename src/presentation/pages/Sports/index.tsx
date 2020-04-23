import * as React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { SportsID } from 'vdoc/libs/domain/models/Sports';
import { sportsListSelectors } from 'vdoc/modules/sportsList';
import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';
import { PlayerList } from 'vdoc/presentation/pages/Sports/PlayerList';

type IProps = RouteComponentProps<{ id: string }>;

const SportsPage: React.FC<IProps> = props => {
  
  const sportsId = new SportsID(props.match.params.id);
  const sports = useSelector(sportsListSelectors.select(sportsId));

  if (!sports) {
    return (
      <BaseContainer />
    )
  }

  return (
    <BaseContainer>
      <main className="sports">
        <section className="key-visual">
          <h3 className="name">{sports.name}</h3>
          <p className="desc">{sports.description}</p>
          <ul className="bread-list">
            <li>
              
            </li>
          </ul>
        </section>
        <section className="newsbox">
          <h3>アスリート一覧</h3>
          <PlayerList sports={sports} />
        </section>
      </main>
    </BaseContainer>
  );
};

export { SportsPage };
