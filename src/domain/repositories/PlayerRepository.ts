import { Player } from "vdoc/domain/models/Player";

abstract class PlayerRepository {
  abstract async getAllPlayers(): Promise<Player[]>;

  abstract async getPlayer(id: string): Promise<Player>;
}

export { PlayerRepository };
