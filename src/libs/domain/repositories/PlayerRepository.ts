import { Player } from "vdoc/libs/domain/models/Player";
import { Sports } from "vdoc/libs/domain/models/Sports";

abstract class PlayerRepository {
  abstract async getAllPlayers(): Promise<Player[]>;

  abstract async getPlayer(id: string): Promise<Player>;

  abstract async getPlayerFromSports(sports: Sports): Promise<Player[]>;

  abstract async postPlayer(player: Player): Promise<void>;
}

export { PlayerRepository };
