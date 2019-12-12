import { Entity } from "./Entity";

class Player extends Entity {
  id: number;
  japaneseFirstName: string = "";
  japaneseLastName: string = "";
  romanFirstName: string = "";
  romanLastName: string = "";
  age: number;
  sex: Sex;
  imageUrl: string;
  idPhotoUrl: string;
  bio: string;
  twitterUrl?: string;
  facebookUrl?: string;
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
      twitterUrl: this.twitterUrl,
      facebookUrl: this.facebookUrl,
      siteURL: this.siteUrl
    };
  }
}

enum Sex {
  Male,
  Femail,
  Other
}

export { Player };
