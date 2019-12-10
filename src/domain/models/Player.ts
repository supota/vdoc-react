import { Entity } from "./Entity";

class Player extends Entity {
  id: number;
  japaneseFirstName: string;
  japaneseLastName: string;
  romanFirstName: string;
  romanLastName: string;
  age: number;
  sex: Sex;
  imageUrl: string;
  bio: string;
  twitterID?: string;
  facebookID?: string;
  siteURL?: string;

  constructor(init?: Partial<Player>) {
    super();
    Object.assign(this, init);
  }
}

enum Sex {
  Male,
  Femail,
  Unknown
}

export { Player };
