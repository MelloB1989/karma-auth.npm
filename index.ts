import { Config } from './src/config';
import { UserService } from './src/lib/services/OrgUserService';

class KarmaAuth {
    userService: UserService;

    constructor(orgAuthId: string, orgAuthToken: string) {
        const baseURL = 'http://localhost:9080/v1';
        const config = new Config(orgAuthId, orgAuthToken);
        this.userService = new UserService(baseURL, config);
    }
}

export { KarmaAuth };
