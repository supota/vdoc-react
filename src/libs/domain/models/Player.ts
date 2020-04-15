import { Entity } from './Entity';

class Player extends Entity {
  id: string;
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

  constructor(init?: Partial<Player>) {
    super();
    Object.assign(this, init);
  }
}

export { Player };
