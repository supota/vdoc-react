import Player from "vdoc/domain/models/Player";

abstract class PlayerRepository {
  abstract getAllPlayers(): Promise<Player[]>;

  abstract getPlayer(id: number): Promise<Player>;
}

export default PlayerRepository;
