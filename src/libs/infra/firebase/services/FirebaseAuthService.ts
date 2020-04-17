import { firebase } from 'vdoc/libs/infra/firebase/firebase';

import { AuthService } from 'vdoc/libs/domain/services/AuthService';

class FirebaseAuthService extends AuthService {
  async login(email: string, password: string): Promise<firebase.User> {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    } catch {
      throw new Error('Could not verify user.');
    }
    return firebase.auth().currentUser!;
  }

  isLoggedIn(): boolean {
    return firebase.auth().currentUser !== null;
  }
}

export { FirebaseAuthService };
