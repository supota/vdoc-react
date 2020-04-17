import { Player, PlayerID } from 'vdoc/libs/domain/models/Player';
import { SportsID } from 'vdoc/libs/domain/models/Sports';

abstract class PlayerRepository {
  /**
   * 全てのプレイヤーを取得する
   */
  abstract async getAllPlayers(): Promise<Player[]>;

  /**
   * IDからプレイヤーを1つ取得する
   *
   * @param id プレイヤーのID
   */
  abstract async getPlayer(id: PlayerID): Promise<Player>;

  /**
   * スポーツからプレイヤーを全て取得する
   *
   * @param sports 取得したいSportsエンティティ、SportsIDにしたい
   */
  abstract async getPlayerFromSports(sportsID: SportsID): Promise<Player[]>;

  /**
   * プレイヤーを作成する
   *
   * @param player 作成したいプレイヤーエンティティ
   */
  abstract async postPlayer(player: Player): Promise<void>;

  /**
   * プレイヤーを更新する
   *
   * @param player 更新したいプレイヤーエンティティ
   */
  abstract async updatePlayer(player: Player): Promise<void>;
}

export { PlayerRepository };
