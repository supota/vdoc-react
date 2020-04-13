import { Sports } from "vdoc/libs/domain/models/Sports";

abstract class SportsRepository {
  abstract async getAllSports(): Promise<Sports[]>;
  abstract async getSports(id: string): Promise<Sports>;
}

export { SportsRepository };
