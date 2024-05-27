import apiClient from '@/api/axios'
import { IFruit } from '@/types/fruits'

export const getFruits = async (): Promise<IFruit[]> => {
  const response = await apiClient.get<IFruit[]>('/fruits')
  return response.data
}

export const getFruitById = async (id: string): Promise<IFruit> => {
  const response = await apiClient.get<IFruit>(`/fruits/${id}`)
  return response.data
}

export const createFruit = async (fruit: Omit<IFruit, 'id'>): Promise<IFruit> => {
  const response = await apiClient.post<IFruit>('/fruits', fruit)
  return response.data
}

export const deleteFruit = async (id: string): Promise<void> => {
  await apiClient.delete(`/fruits/${id}`)
}
