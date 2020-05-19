import { Player, PlayerID } from 'vdoc/libs/domain/models/Player';
import { SportsID } from 'vdoc/libs/domain/models/Sports';
import { PlayerDTO } from 'vdoc/libs/infra/firebase/repositories/dto/PlayerDTO';
import { TimestampMapper } from 'vdoc/libs/infra/firebase/repositories/mapper/TimestampMapper';

class PlayerAssembler {
  static encode(player: Player): PlayerDTO {
    return new PlayerDTO({
      id: player.id.value,
      name: player.name,
      phonetic: player.phonetic,
      birthday: TimestampMapper.encode(player.birthday),
      profile: player.profile,
      performances: Array.from(player.performances),
      email: player.email,
      password: player.password,
      profilePhotoUrl: player.profilePhotoUrl,
      twitterUrl: player.twitterUrl,
      facebookUrl: player.facebookUrl,
      instagramUrl: player.instagramUrl,
      siteUrl: player.siteUrl,
      sportsID: player.sportsID.value,
    });
  }

  static decode(dto: PlayerDTO): Player {
    return new Player({
      id: new PlayerID(dto.id),
      name: dto.name,
      phonetic: dto.phonetic,
      birthday: TimestampMapper.decode(dto.birthday),
      profile: dto.profile,
      performances: dto.performances,
      email: dto.email,
      password: dto.password,
      profilePhotoUrl: dto.profilePhotoUrl,
      twitterUrl: dto.twitterUrl,
      facebookUrl: dto.facebookUrl,
      instagramUrl: dto.instagramUrl,
      siteUrl: dto.siteUrl,
      sportsID: new SportsID(dto.sportsID),
    });
  }
}

export { PlayerAssembler };
