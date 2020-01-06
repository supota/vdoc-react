import * as React from "react";

import { BaseContainer } from "vdoc/presentation/organisms/BaseContainer";
import { PlayerList } from "vdoc/presentation/pages/Sports/PlayerList";

import { ImageProvider } from "vdoc/libs/application/ImageProvider";

const SportsPage = () => {
  return (
    <BaseContainer>
      <main className="sports">
        <section className="key-visual">
          <h3 className="name">コーフボール</h3>
          <p className="desc">
            ここに概要が入ります。ここに概要が入ります。
            <br />
            ここに概要が入ります。ここに概要が入ります。
          </p>
          <ul className="bread-list">
            <li>
              <a href=""></a>
            </li>
          </ul>
        </section>
        <section className="newsbox">
          <h3>アスリート一覧</h3>
          <PlayerList />
        </section>
      </main>
    </BaseContainer>
  );
};

export { SportsPage };
