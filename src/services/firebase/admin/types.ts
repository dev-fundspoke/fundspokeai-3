import { ServiceAccount } from 'firebase-admin/app'

export interface AdminConfig {
  credential: ServiceAccount
  storageBucket?: string
}

export interface TokenVerificationResult {
  uid: string
  email?: string
  emailVerified?: boolean
  authTime: number
  issuedAt: number
  expiresAt: number
}

export interface AdminAuthError extends Error {
  code: string
  originalError?: unknown
}

export interface AdminStorageError extends Error {
  code: string
  originalError?: unknown
}

export interface AdminFirestoreError extends Error {
  code: string
  originalError?: unknown
}