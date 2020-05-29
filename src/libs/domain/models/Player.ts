import { Entity } from './Entity';
import { SportsID } from './Sports';

class Player extends Entity {
  id: PlayerID;
  name: string;
  phonetic: string;
  birthday: Date;
  profile: string;
  performances: string[];
  profilePhotoUrl: string;
  twitterUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  siteUrl: string;
  sportsID: SportsID;

  constructor(init?: Partial<Player>) {
    super();
    Object.assign(this, init);
  }

  partialUpdate(val: Partial<Player>) {
    // 変更の可能性があるメンバをPartial Updateできるように
    this.name = val.name ?? this.name;
    this.phonetic = val.phonetic ?? this.phonetic;
    this.birthday = val.birthday ?? this.birthday;
    this.profile = val.profile ?? this.profile;
    this.performances = val.performances ?? this.performances;
    this.profilePhotoUrl = val.profilePhotoUrl ?? this.profilePhotoUrl;
    this.twitterUrl = val.twitterUrl ?? this.twitterUrl;
    this.facebookUrl = val.facebookUrl ?? this.facebookUrl;
    this.instagramUrl = val.instagramUrl ?? this.instagramUrl;
    this.siteUrl = val.siteUrl ?? this.siteUrl;
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
