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

  getLoginState(): Promise<firebase.User | null> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => resolve(user),
        err => reject(),
      );
    });
  }

  async logout(): Promise<void> {
    await firebase.auth().signOut();
  }
}

export { FirebaseAuthService };
