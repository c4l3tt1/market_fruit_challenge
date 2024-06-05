import axios from 'axios'

export const BASE_URL = 'https://market-fruit-api.vercel.app'
//export const BASE_URL = 'http://localhost:3001'

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
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
