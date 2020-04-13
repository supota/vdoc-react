import { PlayerRepository } from 'vdoc/libs/domain/repositories/PlayerRepository';
import { SportsRepository } from 'vdoc/libs/domain/repositories/SportsRepository';
import { AuthService } from 'vdoc/libs/domain/services/AuthService';
import { ImageService } from 'vdoc/libs/domain/services/ImageService';
import { FirestorePlayerRepository } from 'vdoc/libs/infra/firebase/repositories/FirestorePlayerRepository';
import { FirestoreSportsRepository } from 'vdoc/libs/infra/firebase/repositories/FirestoreSportsRepository';
import { FirebaseAuthService } from 'vdoc/libs/infra/firebase/services/FirebaseAuthService';
import { FirebaseImageService } from 'vdoc/libs/infra/firebase/services/FirebaseImageService';

// Provide domain
class DomainProvider {
  static playerRepo: PlayerRepository = new FirestorePlayerRepository();
  static sportsRepo: SportsRepository = new FirestoreSportsRepository();
  static authService: AuthService = new FirebaseAuthService();
  static imageService: ImageService = new FirebaseImageService();
}

export { DomainProvider };
