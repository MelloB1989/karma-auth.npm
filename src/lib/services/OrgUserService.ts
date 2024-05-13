import { ApiService } from './OrgApiService';
import { Config } from '../../config';

export class UserService extends ApiService {
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

    async updateUser(uid: string, updateData: any) {
        return this.post(`/users/update/${uid}`, updateData);
    }

    async deleteUser(uid: string) {
        return this.delete(`/users/delete/${uid}`);
    }
}
