import { ApiService } from './OrgApiService';
import { Config } from '../../config';

export class OrgUserRoles extends ApiService {
    constructor(baseURL: string, config: Config) {
        super(baseURL, config);
    }

    async createUserRole(roleID: string, userID: string) {
        return this.post(`/roles/create/${userID}/${roleID}`);
    }

}
