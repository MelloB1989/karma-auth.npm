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
        const baseURL = 'https://karma-auth.app.k8s.coffeecodes.in/v1';
        const config = new Config(orgAuthId, orgAuthToken);
        this.Users = new OrgUsers(baseURL, config);
        this.Roles = new OrgRoles(baseURL, config);
        this.UserRoles = new OrgUserRoles(baseURL, config);
    }
}

class KarmaUser {
    Users: Users;

    constructor(token: string) {
        const baseURL = 'https://karma-auth.coffeecodes.in/v1';
        this.Users = new Users(baseURL, token);
    }
}

export { KarmaAuth, KarmaUser };
