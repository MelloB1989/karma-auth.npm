import { ApiService } from './OrgApiService';
import { Config } from '../../config';

export class UserService extends ApiService {
    constructor(baseURL: string, config: Config) {
        super(baseURL, config);
    }

    async createUser(userData: any) {
        return this.post('/user/create', userData);
    }

    async getUser(uid: string) {
        return this.get(`/user/get/${uid}`);
    }
    
    async authenticateUserByEmail(email: string, password: string) {
        return this.post('/user/auth/email', { email, password });
    }

    async authenticateUserByPhone(phone: string, password: string) {
        return this.post('/user/auth/phone', { phone, password });
    }

    async updateUser(uid: string, updateData: any) {
        return this.post(`/user/update/${uid}`, updateData);
    }

    async deleteUser(uid: string) {
        return this.delete(`/user/delete/${uid}`);
    }
}
