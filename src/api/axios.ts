import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

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
    if (error.response) {
      console.error('API Error:', {
        message: error.message,
        status: error.response.status,
        data: error.response.data,
      })
    } else if (error.request) {
      console.error('No response received:', error.request)
    } else {
      console.error('Error in request setup:', error.message)
    }

    return Promise.reject(error)
  }
)

export default apiClient
