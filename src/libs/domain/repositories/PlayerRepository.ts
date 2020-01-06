import { Player } from "vdoc/libs/domain/models/Player";

abstract class PlayerRepository {
  abstract async getAllPlayers(): Promise<Player[]>;

  abstract async getPlayer(id: string): Promise<Player>;

  abstract async postPlayer(player: Player): Promise<void>;
}

export { PlayerRepository };
