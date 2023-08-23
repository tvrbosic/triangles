import axios from 'axios';

import { ITriangleObject } from 'types/common';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getTriangles = async () => {
  const response = await axiosInstance.get('/triangles');
  return response.data;
};

export const postTriangle = async (triangleObject: ITriangleObject) => {
  const response = await axiosInstance.post('/triangles', triangleObject);
  return response.data;
};

export const deleteTriangle = async (id: number) => {
  const response = await axiosInstance.delete(`/triangles/${id}`);
  return response.data;
};
