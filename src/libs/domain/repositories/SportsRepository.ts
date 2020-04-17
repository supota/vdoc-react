import { Sports, SportsID } from 'vdoc/libs/domain/models/Sports';

abstract class SportsRepository {
  /**
   * 全てのスポーツを取得
   */
  abstract async getAllSports(): Promise<Sports[]>;

  /**
   * IDからスポーツを1つ取得
   *
   * @param id 取得したいSportsのID
   */
  abstract async getSports(id: SportsID): Promise<Sports>;
}

export { SportsRepository };
