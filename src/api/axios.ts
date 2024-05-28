import axios from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export default apiClient
