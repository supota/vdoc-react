import { FirestorePlayerRepository } from "vdoc/libs/infra/firebase/repositories/FirestorePlayerRepository";
import { FirestoreSportsRepository } from "vdoc/libs/infra/firebase/repositories/FirestoreSportsRepository";
import { FirebaseAuthService } from "vdoc/libs/infra/firebase/services/FirebaseAuthService";
import { FirebaseImageService } from "vdoc/libs/infra/firebase/services/FirebaseImageService";

// Provide domain
class DomainProvider {
  static PlayerRepository = FirestorePlayerRepository;
  static SportsRepository = FirestoreSportsRepository;
  static AuthService = FirebaseAuthService;
  static ImageService = FirebaseImageService;
}

export { DomainProvider };
