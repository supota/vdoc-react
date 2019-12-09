import { firebase } from "vdoc/application/firebase";

abstract class AuthService {
  abstract async login(email: string, password: string): Promise<boolean>;
}

export { AuthService };
