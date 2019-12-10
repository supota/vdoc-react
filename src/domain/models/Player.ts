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
  idPhotoUrl: string;
  bio: string;
  twitterID?: string;
  facebookID?: string;
  siteUrl?: string;

  constructor(init?: Partial<Player>) {
    super();
    Object.assign(this, init);
  }

  toMap(): Object {
    return {
      id: this.id,
      japaneseFirstName: this.japaneseFirstName,
      japaneseLastName: this.japaneseLastName,
      romanFirstName: this.romanFirstName,
      romanLastName: this.romanLastName,
      age: this.age,
      sex: this.sex,
      iamgeUrl: this.imageUrl,
      idPhotoUrl: this.idPhotoUrl,
      bio: this.bio,
      twitterID: this.twitterID,
      facebookID: this.facebookID,
      siteURL: this.siteUrl
    };
  }
}

enum Sex {
  Male,
  Femail,
  Unknown
}

export { Player };
