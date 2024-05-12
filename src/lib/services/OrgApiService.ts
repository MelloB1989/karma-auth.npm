import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Config } from '../../config';

export class ApiService {
    private axiosInstance: AxiosInstance;
    private config: Config;

    constructor(baseURL: string, config: Config) {
        this.config = config;
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
                'x-karma-org-authid': this.config.orgAuthId,
                'x-karma-org-authtoken': this.config.orgAuthToken,
            },
        });
    }

    protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, config);
        return response.data;
    }

    protected async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data, config);
        return response.data;
    }

    protected async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.put<T>(url, data, config);
        return response.data;
    }

    protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.delete<T>(url, config);
        return response.data;
    }
}