import { tokenService } from '../auth'
import { ApiError, ApiRequestConfig, ApiResponse } from './types'

class ApiService {
  private static instance: ApiService
  private baseUrl = 'https://bolt.new/api'
  
  private constructor() {}

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }
    return ApiService.instance
  }

  private async getHeaders(): Promise<Headers> {
    const token = await tokenService.getAuthToken()
    return new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
  }

  private async request<T>(config: ApiRequestConfig): Promise<ApiResponse<T>> {
    try {
      const headers = await this.getHeaders()
      
      const response = await fetch(`${this.baseUrl}${config.endpoint}`, {
        method: config.method,
        headers,
        body: config.body ? JSON.stringify(config.body) : undefined,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return { data, status: response.status }
    } catch (error) {
      const apiError = new Error('API request failed') as ApiError
      apiError.code = 'API_ERROR'
      apiError.details = error
      throw apiError
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'GET', endpoint })
  }

  async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'POST', endpoint, body: data })
  }

  async put<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'PUT', endpoint, body: data })
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'DELETE', endpoint })
  }
}

export const apiService = ApiService.getInstance()