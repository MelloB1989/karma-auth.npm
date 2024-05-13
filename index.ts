import { Config } from './src/config';
import { OrgUsers } from './src/lib/services/OrgUserService';
import { OrgRoles } from './src/lib/services/OrgRoleService';
import { OrgUserRoles } from './src/lib/services/OrgUserRoleService';
import { Users } from './src/lib/services/UserServices';

class KarmaAuth {
    Users: OrgUsers;
    Roles: OrgRoles;
    UserRoles: OrgUserRoles;

    constructor(orgAuthId: string, orgAuthToken: string) {
        const baseURL = 'http://localhost:9080/v1';
        const config = new Config(orgAuthId, orgAuthToken);
        this.Users = new OrgUsers(baseURL, config);
        this.Roles = new OrgRoles(baseURL, config);
        this.UserRoles = new OrgUserRoles(baseURL, config);
    }
}

class KarmaUser {
    Users: Users;

    constructor(baseURL: string, token: string) {
        this.Users = new Users(baseURL, token);
    }
}

export { KarmaAuth, KarmaUser };
