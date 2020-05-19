import { firebase } from 'vdoc/libs/infra/firebase/firebase';
import { CollectionNames } from 'vdoc/libs/infra/firebase/CollectionNames';

import { Player, PlayerID } from 'vdoc/libs/domain/models/Player';
import { SportsID } from 'vdoc/libs/domain/models/Sports';
import { PlayerRepository } from 'vdoc/libs/domain/repositories/PlayerRepository';
import { PlayerAssembler } from 'vdoc/libs/infra/firebase/repositories/assembler/PlayerAssembler';
import { PlayerDTO } from 'vdoc/libs/infra/firebase/repositories/dto/PlayerDTO';

class FirestorePlayerRepository extends PlayerRepository {
  async getAllPlayers(): Promise<Player[]> {
    const snap = await firebase
      .firestore()
      .collection(CollectionNames.players)
      .get();

    // Translate to array of Player
    const players = snap.docs.map(doc => {
      const dto = PlayerDTO.fromDoc(doc);
      return PlayerAssembler.decode(dto);
    });

    return players;
  }

  async getPlayer(id: PlayerID): Promise<Player> {
    const doc = await firebase
      .firestore()
      .collection(CollectionNames.players)
      .doc(id.value)
      .get();

    const dto = PlayerDTO.fromDoc(doc);
    const player = PlayerAssembler.decode(dto);
    return player;
  }

  async getPlayerFromSports(sportsId: SportsID): Promise<Player[]> {
    const snap = await firebase
      .firestore()
      .collection(CollectionNames.players)
      .where('sportsID', '==', sportsId.value)
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
      .collection(CollectionNames.players)
      .add(dto.toJson());
  }

  async updatePlayer(player: Player): Promise<Player> {
    const uid = firebase.auth().currentUser?.uid;
    const dto = PlayerAssembler.encode(player);
    await firebase
      .firestore()
      .collection(CollectionNames.players)
      .doc(uid)
      .update(dto.toJson());
    const newPlayer = await this.getPlayer(new PlayerID(uid!));
    return newPlayer;
  }
}

export { FirestorePlayerRepository };
