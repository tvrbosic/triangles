import axios, { AxiosInstance } from 'axios';

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
