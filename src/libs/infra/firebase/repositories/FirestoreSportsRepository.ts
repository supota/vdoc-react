import { firebase } from "vdoc/libs/infra/firebase/firebase";

import { SportsRepository } from "vdoc/libs/domain/repositories/SportsRepository";
import { Sports } from "vdoc/libs/domain/models/Sports";

class FirestoreSportsRepository extends SportsRepository {
  async getSports(id: string): Promise<Sports> {
    const sportsSnapshot = await firebase
      .firestore()
      .collection("sports")
      .doc(id)
      .get();

    const sports = Sports.factoryFromSnapshot(sportsSnapshot);
    return sports;
  }
}

export { FirestoreSportsRepository };
