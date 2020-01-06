import { firebase } from "vdoc/libs/infra/firebase/firebase";

import { Player } from "vdoc/libs/domain/models/Player";
import { PlayerRepository } from "vdoc/libs/domain/repositories/PlayerRepository";

class FirestorePlayerRepository extends PlayerRepository {
  async getAllPlayers(): Promise<Player[]> {
    // Get all players
    let playersSnapshot;

    playersSnapshot = await firebase
      .firestore()
      .collection("players")
      .get();

    // Translate to array of Player
    const players = playersSnapshot.docs.map(
      (playerSnapshot: firebase.firestore.DocumentSnapshot) => {
        return new Player(playerSnapshot.data());
      }
    );

    return players;
  }

  async getPlayer(id: string): Promise<Player> {
    // Get player from id
    let playerSnapshot;

    playerSnapshot = await firebase
      .firestore()
      .collection("players")
      .doc(id)
      .get();

    const player = new Player(playerSnapshot.data());
    return player;
  }

  async postPlayer(player: Player): Promise<void> {
    await firebase
      .firestore()
      .collection("players")
      .add(player.toMap());
  }
}

export { FirestorePlayerRepository };
