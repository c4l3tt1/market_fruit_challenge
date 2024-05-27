import axios from 'axios'

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? process.env.API_URL : process.env.NEXT_PUBLIC_API_BASE_URL

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
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
