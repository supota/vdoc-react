import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { Sports, SportsID } from 'vdoc/libs/domain/models/Sports';

import { DomainProvider } from 'vdoc/libs/application/DomainProvider';
import { ImageProvider } from 'vdoc/libs/application/ImageProvider';

import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';
import { PlayerList } from 'vdoc/presentation/pages/Sports/PlayerList';

type IProps = RouteComponentProps<{ id: string }>;

const SportsPage: React.FC<IProps> = props => {
  const [sports, setSports] = useState<Sports | null>(null);

  // Get sports from id
  const sportsRepository =　DomainProvider.sportsRepo;

  useEffect(() => {
    try {
      (async () => {
        const sports = await sportsRepository.getSports(new SportsID(props.match.params.id));
        setSports(sports);
      })();
    } catch (e) {
      console.log(e);
      // props.history.push("/404");
    }
  }, []);

  if (!sports) {
    return <BaseContainer />;
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
