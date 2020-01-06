abstract class AuthService {
  abstract async login(email: string, password: string): Promise<boolean>;
}

export { AuthService };
