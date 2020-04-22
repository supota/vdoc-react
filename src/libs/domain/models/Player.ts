import { Entity } from './Entity';
import { SportsID } from './Sports';

class Player extends Entity {
  id: PlayerID;
  name: string;
  phonetic: string;
  birthday: Date;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  proofPhotoUrl?: string;
  twitterUrl: string;
  facebookUrl: string;
  siteUrl: string;
  sportsID: SportsID;

  constructor(init?: Partial<Player>) {
    super();
    Object.assign(this, init);
  }
}

class PlayerID {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }

  isEqualTo(other: PlayerID): boolean {
    return this.value === other.value;
  }
}

export { Player, PlayerID };
