import { Entity } from "./Entity";

class Player extends Entity {
  japaneseFirstName: string;
  japaneseLastName: string;
  romanFirstName: string;
  romanLastName: string;
  year: number;
  month: number;
  day: number;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
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
      japaneseFirstName: this.japaneseFirstName,
      japaneseLastName: this.japaneseLastName,
      romanFirstName: this.romanFirstName,
      romanLastName: this.romanLastName,
      year: this.year,
      month: this.month,
      day: this.day,
      profile: this.profile,
      performances: this.performances,
      email: this.email,
      password: this.password,
      iamgeUrl: this.profilePhotoUrl,
      proofPhotoUrl: this.proofPhotoUrl,
      twitterUrl: this.twitterUrl,
      facebookUrl: this.facebookUrl,
      siteURL: this.siteUrl
    };
  }

  isExists(): boolean {
    return (
      this.japaneseFirstName !== "" &&
      this.japaneseLastName !== "" &&
      this.romanFirstName !== "" &&
      this.romanLastName !== ""
    );
  }
}

export { Player };
