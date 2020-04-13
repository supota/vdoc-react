import { Sports } from "vdoc/libs/domain/models/Sports";

abstract class SportsRepository {
  /**
   * 全てのスポーツを取得
   */
  abstract async getAllSports(): Promise<Sports[]>;

  /**
   * IDからスポーツを1つ取得
   */
  abstract async getSports(id: string): Promise<Sports>;
}

export { SportsRepository };
