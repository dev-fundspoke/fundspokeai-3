import { adminAuth } from './config'
import { AdminAuthError, TokenVerificationResult } from './types'

export const verifyIdToken = async (token: string): Promise<TokenVerificationResult> => {
  try {
    const decodedToken = await adminAuth.verifyIdToken(token)
    return {
      uid: decodedToken.uid,
      email: decodedToken.email,
      emailVerified: decodedToken.email_verified,
      authTime: decodedToken.auth_time,
      issuedAt: decodedToken.iat,
      expiresAt: decodedToken.exp
    }
  } catch (error) {
    const authError = new Error('Token verification failed') as AdminAuthError
    authError.code = (error as any)?.code || 'auth/unknown'
    authError.originalError = error
    throw authError
  }
}