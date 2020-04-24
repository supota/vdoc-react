import { firebase } from 'vdoc/libs/infra/firebase/firebase';
import { CollectionNames } from 'vdoc/libs/infra/firebase/CollectionNames';

import { Sports, SportsID } from 'vdoc/libs/domain/models/Sports';
import { SportsRepository } from 'vdoc/libs/domain/repositories/SportsRepository';
import { SportsDTO } from 'vdoc/libs/infra/firebase/repositories/dto/SportsDTO';
import { SportsAssembler } from 'vdoc/libs/infra/firebase/repositories/assembler/SportsAssembler';

class FirestoreSportsRepository extends SportsRepository {
  async getAllSports(): Promise<Sports[]> {
    const snap = await firebase
      .firestore()
      .collection(CollectionNames.sports)
      .get();
    const sports = snap.docs.map(doc => {
      const dto = SportsDTO.fromDoc(doc);
      return SportsAssembler.decode(dto);
    });
    return sports;
  }

  async getSports(id: SportsID): Promise<Sports> {
    const doc = await firebase
      .firestore()
      .collection(CollectionNames.sports)
      .doc(id.value)
      .get();

    const dto = SportsDTO.fromDoc(doc);
    const sports = SportsAssembler.decode(dto);
    return sports;
  }
}

export { FirestoreSportsRepository };
