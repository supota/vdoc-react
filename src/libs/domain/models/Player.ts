import { Entity } from "./Entity";

class Player extends Entity {
  id: string;
  name: string;
  birthday: Date;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  proofPhotoUrl?: string;
  twitterUrl: string | null;
  facebookUrl: string | null;
  siteUrl: string | null;

  constructor(init?: Partial<Player>) {
    super();
    Object.assign(this, init);
  }
}

export { Player };
