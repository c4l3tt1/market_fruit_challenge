import axios from 'axios'

export const BASE_URL = 'https://market-fruit-api.vercel.app'

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
