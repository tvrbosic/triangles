import axios, { AxiosInstance } from 'axios';

import { IUserCredentials } from 'types/user';
import { ITriangleObject } from 'types/triangle';

class ApiClient {
  private static instance: ApiClient;

  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  // ########### Auth
  public async postLogin(payload: IUserCredentials) {
    const response = await this.axiosInstance.post('/login', { ...payload });
    return response.data;
  }

  public async postRegister(payload: IUserCredentials) {
    const response = await this.axiosInstance.post('/register', { ...payload });
    return response.data;
  }

  // ########### Triangles
  public async getTriangles() {
    const response = await this.axiosInstance.get('/triangles');
    return response.data;
  }

  public async postTriangle(triangleObject: ITriangleObject) {
    const response = await this.axiosInstance.post('/triangles', triangleObject);
    return response.data;
  }

  public async deleteTriangle(id: number) {
    const response = await this.axiosInstance.delete(`/triangles/${id}`);
    return response.data;
  }
}

export default ApiClient;
