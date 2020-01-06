import { Entity } from "./Entity";
import { Player } from "./Player";

class RawPlayer extends Entity {
  japaneseFirstName: string;
  japaneseLastName: string;
  romanFirstName: string;
  romanLastName: string;
  year: string;
  month: string;
  day: string;
  profile: string;
  performances: string;
  email: string;
  password: string;
  profilePhotoData: Blob;
  proofPhotoData?: Blob;
  twitterUrl?: string;
  facebookUrl?: string;
  siteUrl?: string;

  async convertToPlayer() {}
}

export { RawPlayer };
