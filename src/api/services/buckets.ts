import apiClient from '@/api/axios'
import { IBucket } from '@/types/buckets'

export const getBuckets = async (): Promise<IBucket[]> => {
  const response = await apiClient.get<IBucket[]>('/buckets')
  return response.data
}

export const getBucketById = async (id: string): Promise<IBucket> => {
  const response = await apiClient.get<IBucket>(`/buckets/${id}`)
  return response.data
}

export const createBucket = async (bucket: Omit<IBucket, 'id'>): Promise<IBucket> => {
  const response = await apiClient.post<IBucket>('/buckets', bucket)
  return response.data
}

export const updateBucket = async (id: string, bucket: Partial<IBucket>): Promise<IBucket> => {
  const response = await apiClient.put<IBucket>(`/buckets/${id}`, bucket)
  return response.data
}

export const deleteBucket = async (id: string): Promise<void> => {
  await apiClient.delete(`/buckets/${id}`)
}
