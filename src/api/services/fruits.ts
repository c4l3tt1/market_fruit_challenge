import apiClient from '@/api/axios'
import { IFruit } from '@/types/fruits'

export const getFruits = async (): Promise<IFruit[]> => {
  try {
    const response = await apiClient.get<IFruit[]>('/fruits')
    return response.data
  } catch (error) {
    console.error('Error fetching fruits', error)
    throw new Error('Could not fetch fruits')
  }
}

export const getFruitById = async (id: string): Promise<IFruit> => {
  try {
    const response = await apiClient.get<IFruit>(`/fruits/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching fruit with id ${id}`, error)
    throw new Error(`Could not fetch fruit with id ${id}`)
  }
}

export const createFruit = async (fruit: Omit<IFruit, 'id'>): Promise<IFruit> => {
  try {
    const response = await apiClient.post<IFruit>('/fruits', fruit)
    return response.data
  } catch (error) {
    console.error('Error creating fruit', error)
    throw new Error('Could not create fruit')
  }
}

export const updateFruit = async (id: string, fruit: Partial<IFruit>): Promise<IFruit> => {
  try {
    const response = await apiClient.put<IFruit>(`/fruits/${id}`, fruit)
    return response.data
  } catch (error) {
    console.error(`Error updating fruit with id ${id}`, error)
    throw new Error(`Could not update fruit with id ${id}`)
  }
}

export const deleteFruit = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/fruits/${id}`)
  } catch (error) {
    console.error(`Error deleting fruit with id ${id}`, error)
    throw new Error(`Could not delete fruit with id ${id}`)
  }
}
