import axios from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

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
