import { firebase } from "vdoc/libs/infra/firebase/firebase";

import { Player } from "vdoc/libs/domain/models/Player";
import { Sports } from "vdoc/libs/domain/models/Sports";
import { PlayerRepository } from "vdoc/libs/domain/repositories/PlayerRepository";
import { PlayerAssembler } from "vdoc/libs/infra/firebase/repositories/assembler/PlayerAssembler";
import { PlayerDTO } from "vdoc/libs/infra/firebase/repositories/dto/PlayerDTO";

class FirestorePlayerRepository extends PlayerRepository {
  async getAllPlayers(): Promise<Player[]> {
    const snap = await firebase
      .firestore()
      .collection("players")
      .get();

    // Translate to array of Player
    const players = snap.docs.map(doc => {
      const dto = PlayerDTO.fromDoc(doc);
      return PlayerAssembler.decode(dto);
    });

    return players;
  }

  async getPlayer(id: string): Promise<Player> {
    const doc = await firebase
      .firestore()
      .collection("players")
      .doc(id)
      .get();

    const dto = PlayerDTO.fromDoc(doc);
    const player = PlayerAssembler.decode(dto);
    return player;
  }

  async getPlayerFromSports(sports: Sports): Promise<Player[]> {
    const sportsId = sports.id;
    const snap = await firebase
      .firestore()
      .collection("players")
      .where("sportsId", "==", sportsId)
      .get();
    const players = snap.docs.map(doc => {
      const dto = PlayerDTO.fromDoc(doc);
      return PlayerAssembler.decode(dto);
    });
    return players;
  }

  async postPlayer(player: Player): Promise<void> {
    const dto = PlayerAssembler.encode(player);
    await firebase
      .firestore()
      .collection("players")
      .add(dto.toJson());
  }
}

export { FirestorePlayerRepository };
