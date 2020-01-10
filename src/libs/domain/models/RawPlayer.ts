import { Entity } from "./Entity";
import { Player } from "./Player";

import { ImageService } from "vdoc/libs/domain/services/ImageService";

class RawPlayer extends Entity {
  name: string;
  phonetic: string;
  year: string;
  month: string;
  day: string;
  profile: string;
  performances: string;
  email: string;
  password: string;
  profilePhotoData: File;
  proofPhotoData: File;
  twitterUrl?: string;
  facebookUrl?: string;
  siteUrl?: string;

  private imageService: ImageService;

  constructor(_imageService: ImageService) {
    super();
    this.imageService = _imageService;
  }

  async convertToPlayer(): Promise<Player> {
    const [profilePhotoUrl, proofPhotoUrl] = await Promise.all([
      this.imageService.upload(this.profilePhotoData),
      this.imageService.upload(this.proofPhotoData)
    ]);
    return new Player({
      name: this.name,
      phonetic: this.phonetic,
      year: parseInt(this.year),
      month: parseInt(this.month),
      day: parseInt(this.day),
      profile: this.profile,
      performances: this.performances
        .trim()
        .split("\n")
        .filter(v => v),
      email: this.email,
      password: this.password,
      profilePhotoUrl: profilePhotoUrl,
      proofPhotoUrl: proofPhotoUrl,
      twitterUrl: this.twitterUrl,
      facebookUrl: this.facebookUrl,
      siteUrl: this.siteUrl
    });
  }
}

export { RawPlayer };
