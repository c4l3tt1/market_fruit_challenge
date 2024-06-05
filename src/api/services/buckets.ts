import apiClient from '@/api/axios'
import { IBucket } from '@/types/buckets'

export const getBuckets = async (): Promise<IBucket[]> => {
  try {
    const response = await apiClient.get<IBucket[]>('/buckets')
    return response.data
  } catch (error) {
    console.error('Error fetching buckets', error)
    throw new Error('Could not fetch buckets')
  }
}

export const getBucketById = async (id: string): Promise<IBucket> => {
  try {
    const response = await apiClient.get<IBucket>(`/buckets/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching bucket with id ${id}`, error)
    throw new Error(`Could not fetch bucket with id ${id}`)
  }
}

export const createBucket = async (bucket: Omit<IBucket, 'id'>): Promise<IBucket> => {
  try {
    const response = await apiClient.post<IBucket>('/buckets', bucket)
    return response.data
  } catch (error) {
    console.error('Error creating bucket', error)
    throw new Error('Could not create bucket')
  }
}

export const updateBucket = async (id: string, bucket: Partial<IBucket>): Promise<IBucket> => {
  try {
    const response = await apiClient.put<IBucket>(`/buckets/${id}`, bucket)
    return response.data
  } catch (error) {
    console.error(`Error updating bucket with id ${id}`, error)
    throw new Error(`Could not update bucket with id ${id}`)
  }
}

export const deleteBucket = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/buckets/${id}`)
  } catch (error) {
    console.error(`Error deleting bucket with id ${id}`, error)
    throw new Error(`Could not delete bucket with id ${id}`)
  }
}
