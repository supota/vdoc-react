import { firebase } from 'vdoc/libs/infra/firebase/firebase';

import { Player, PlayerID } from 'vdoc/libs/domain/models/Player';
import { SportsID } from 'vdoc/libs/domain/models/Sports';
import { PlayerRepository } from 'vdoc/libs/domain/repositories/PlayerRepository';
import { PlayerAssembler } from 'vdoc/libs/infra/firebase/repositories/assembler/PlayerAssembler';
import { PlayerDTO } from 'vdoc/libs/infra/firebase/repositories/dto/PlayerDTO';

class FirestorePlayerRepository extends PlayerRepository {
  readonly firestore = firebase.firestore();

  async getAllPlayers(): Promise<Player[]> {
    const snap = await this.firestore.collection('players').get();

    // Translate to array of Player
    const players = snap.docs.map(doc => {
      const dto = PlayerDTO.fromDoc(doc);
      return PlayerAssembler.decode(dto);
    });

    return players;
  }

  async getPlayer(id: PlayerID): Promise<Player> {
    const doc = await this.firestore
      .collection('players')
      .doc(id.value)
      .get();

    const dto = PlayerDTO.fromDoc(doc);
    const player = PlayerAssembler.decode(dto);
    return player;
  }

  async getPlayerFromSports(sportsId: SportsID): Promise<Player[]> {
    const snap = await this.firestore
      .collection('players')
      .where('sportsId', '==', sportsId.value)
      .get();
    const players = snap.docs.map(doc => {
      const dto = PlayerDTO.fromDoc(doc);
      return PlayerAssembler.decode(dto);
    });
    return players;
  }

  async postPlayer(player: Player): Promise<void> {
    const dto = PlayerAssembler.encode(player);
    await this.firestore.collection('players').add(dto.toJson());
  }

  async updatePlayer(player: Player): Promise<void> {
    const dto = PlayerAssembler.encode(player);
    await this.firestore
      .collection('players')
      .doc(dto.id)
      .update(dto.toJson());
  }
}

export { FirestorePlayerRepository };
