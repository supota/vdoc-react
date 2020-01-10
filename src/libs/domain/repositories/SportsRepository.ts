import { Sports } from "vdoc/libs/domain/models/Sports";

abstract class SportsRepository {
  abstract async getSports(id: string): Promise<Sports>;
}

export { SportsRepository };
