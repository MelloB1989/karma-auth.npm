import { Config } from './config';
import { UserService } from './lib/services/OrgUserService';

class AuthService {
    userService: UserService;

    constructor(orgAuthId: string, orgAuthToken: string) {
        const baseURL = 'http://localhost:9080';
        const config = new Config(orgAuthId, orgAuthToken);
        this.userService = new UserService(baseURL, config);
    }
}

export { AuthService };
