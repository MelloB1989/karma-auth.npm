import { ApiService } from './UserApiService';

export class Users extends ApiService {
    constructor(baseURL: string, token: string) {
        super(baseURL, token);
    }

    async getUser(userData: any) {
        return this.get('/users/me', userData);
    }

    async getUserRoles(rid?: string) {
        if (rid) {
            return this.get(`/users/roles/get/${rid}`);
        } else {
            return this.get(`/users/roles/getAll`);
        }
    }

    async deleteUserRole(rid: string) {
        return this.delete(`/users/roles/delete/${rid}`);
    }
}