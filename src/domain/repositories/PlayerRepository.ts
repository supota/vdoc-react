import Player from "vdoc/domain/models/Player";

abstract class PlayerRepository {
  abstract getAllPlayers(): Promise<Player[]>;
}

export default PlayerRepository;
