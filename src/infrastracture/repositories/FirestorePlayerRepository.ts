import { firebase } from 'vdoc/application/firebase';

import { Player } from 'vdoc/domain/models/Player';
import { PlayerRepository } from 'vdoc/domain/repositories/PlayerRepository';

class FirestorePlayerRepository extends PlayerRepository {

  async getAllPlayers(): Promise<Player[]> {

    // Get all players
    let playersSnapshot;
    try {
      playersSnapshot = await firebase.firestore().collection('players').get();
    } catch {
      throw new Error('Could not get players.');
    }

    // Translate to Player[]
    const players = playersSnapshot.docs.map((playerSnapshot: firebase.firestore.DocumentSnapshot) => {
      return new Player(playerSnapshot.data());
    })

    return players;
  }

  async getPlayer(id: string): Promise<Player> {

    // Get player from id
    let playerSnapshot;
    try {
      playerSnapshot = await firebase.firestore().collection('players').doc(id).get();
    } catch {
      throw new Error(`Could not get player ${id}.`);
    }

    const player = new Player(playerSnapshot.data());
    return player;

  }

}

export { FirestorePlayerRepository };
