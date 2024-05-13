import { ApiService } from './OrgApiService';
import { Config } from '../../config';
import type { updateUser, User } from '../../../src/types';

export class OrgUsers extends ApiService {
    constructor(baseURL: string, config: Config) {
        super(baseURL, config);
    }

    async createUser(userData: any) {
        return this.post('/users/create', userData);
    }

    async getUser(uid: string) {
        return this.get(`/users/get/${uid}`);
    }
    
    async authenticateUserByEmail(email: string, password: string) {
        return this.post('/users/auth/email', { email, password });
    }

    async authenticateUserByPhone(phone: string, password: string) {
        return this.post('/users/auth/phone', { phone, password });
    }

    async updateUser(uid: string, updateData: updateUser) {
        return this.post(`/users/update/${uid}`, updateData);
    }

    async deleteUser(uid: string) {
        return this.delete(`/users/delete/${uid}`);
    }
}
