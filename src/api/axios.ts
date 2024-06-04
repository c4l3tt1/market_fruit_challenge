import axios from 'axios'

export const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_LOCALHOST_URL
    : process.env.NEXT_PUBLIC_PRODUCTION_URL

const apiClient = axios.create({
  baseURL: BASE_URL,
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export default apiClient
