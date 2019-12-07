import Entity from "./Entity";
import { Person } from "normalize-package-data";

class Player extends Entity {
  id: number;
  japaneseFirstName: string;
  japaneseLastName: string;
  romanFirstName: string;
  romanLastName: string;
  age: number;
  sex: number;
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

export default Player;
