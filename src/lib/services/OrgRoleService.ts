import { ApiService } from './OrgApiService';
import { Config } from '../../config';
import type { Permissions, Role, updateRole } from '../../../src/types';

export class OrgRoles extends ApiService {
    constructor(baseURL: string, config: Config) {
        super(baseURL, config);
    }

    async createRole(name: string, permissions: Permissions) {
        return this.post('/roles/create', {name, permissions});
    }

    async getRole(rid: string) {
        return this.get(`/roles/get/${rid}`);
    }

    async getAllRoles() {
        return this.get('/roles/getAll');
    }

    async getRoleByName(name: string) {
        return this.get(`/roles/getByName/${name}`);
    }

    async updateRole(rid: string, updateData: {name: string, permissions: Permissions}) {
        return this.post(`/roles/update/${rid}`, updateData);
    }

    async deleteRole(rid: string) {
        return this.delete(`/roles/delete/${rid}`);
    }
}
