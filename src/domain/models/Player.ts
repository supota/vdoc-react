import { Entity } from "./Entity";

class Player extends Entity {
  id: number;
  japaneseFirstName: string = "";
  japaneseLastName: string = "";
  romanFirstName: string = "";
  romanLastName: string = "";
  year: number;
  month: number;
  day: number;
  sex: Sex;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  imageUrl: string;
  proofPhotoUrl?: string;
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
      year: this.year,
      month: this.month,
      day: this.day,
      sex: this.sex,
      profile: this.profile,
      performances: this.performances,
      email: this.email,
      password: this.password,
      iamgeUrl: this.imageUrl,
      proofPhotoUrl: this.proofPhotoUrl,
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
