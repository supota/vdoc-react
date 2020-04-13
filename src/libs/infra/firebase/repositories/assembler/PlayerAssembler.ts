import { Player } from "vdoc/libs/domain/models/Player";
import { PlayerDTO } from "vdoc/libs/infra/firebase/repositories/dto/PlayerDTO";

class PlayerAssembler {
  static encode(player: Player): PlayerDTO {
    return new PlayerDTO({
      id: player.id,
      name: player.name,
      birthday: player.birthday,
      profile: player.profile,
      performances: Array.from(player.performances),
      email: player.email,
      password: player.password,
      profilePhotoUrl: player.profilePhotoUrl,
      proofPhotoUrl: player.proofPhotoUrl,
      twitterUrl: player.twitterUrl,
      facebookUrl: player.facebookUrl,
      siteUrl: player.siteUrl
    });
  }

  static decode(dto: PlayerDTO): Player {
    return new Player({
      id: dto.id,
      name: dto.name,
      birthday: dto.birthday,
      profile: dto.profile,
      performances: dto.performances,
      email: dto.email,
      password: dto.password,
      profilePhotoUrl: dto.profilePhotoUrl,
      proofPhotoUrl: dto.proofPhotoUrl,
      twitterUrl: dto.twitterUrl,
      facebookUrl: dto.facebookUrl,
      siteUrl: dto.siteUrl
    });
  }
}

export { PlayerAssembler };
