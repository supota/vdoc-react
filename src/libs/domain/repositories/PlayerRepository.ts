import { Player } from "vdoc/libs/domain/models/Player";
import { Sports } from "vdoc/libs/domain/models/Sports";

abstract class PlayerRepository {
  /**
   * 全てのプレイヤーを取得する
   */
  abstract async getAllPlayers(): Promise<Player[]>;

  /**
   * IDからプレイヤーを1つ取得する
   */
  abstract async getPlayer(id: string): Promise<Player>;

  /**
   * スポーツからプレイヤーを全て取得する
   */
  abstract async getPlayerFromSports(sports: Sports): Promise<Player[]>;

  /**
   * プレイヤーを作成する
   */
  abstract async postPlayer(player: Player): Promise<void>;
}

export { PlayerRepository };
