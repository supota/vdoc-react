import { Sports } from 'vdoc/libs/domain/models/Sports';
import { SportsDTO } from 'vdoc/libs/infra/firebase/repositories/dto/SportsDTO';

class SportsAssembler {
  static encode(sports: Sports): SportsDTO {
    return new SportsDTO({
      id: sports.id,
      name: sports.name,
      description: sports.description,
      imageUrl: sports.imageUrl,
    });
  }

  static decode(dto: SportsDTO): Sports {
    return new Sports({
      id: dto.id,
      name: dto.name,
      description: dto.description,
      imageUrl: dto.imageUrl,
    });
  }
}

export { SportsAssembler };
