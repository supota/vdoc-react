import { firebase } from 'vdoc/libs/infra/firebase/firebase';

abstract class AuthService {
  /**
   * ログインする
   *
   * @param email 登録したメールアドレス
   * @param password 登録したパスワード
   */
  abstract async login(email: string, password: string): Promise<firebase.User>;
  /**
   * ログインしているかどうか
   */
  abstract isLoggedIn(): boolean;
}

export { AuthService };
