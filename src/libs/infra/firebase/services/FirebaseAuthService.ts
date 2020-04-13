import { firebase } from 'vdoc/libs/infra/firebase/firebase';

import { AuthService } from 'vdoc/libs/domain/services/AuthService';

class FirebaseAuthService extends AuthService {
  async login(email: string, password: string): Promise<boolean> {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch {
      throw new Error('Could not verify user.');
    }

    return firebase.auth().currentUser != null;
  }
}

export { FirebaseAuthService };
