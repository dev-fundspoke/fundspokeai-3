import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { CompanyInformation } from '../../types/company'
import { validateCompanyData } from '../firebase/security/validation'

class CompanyService {
  private static instance: CompanyService
  
  private constructor() {}

  static getInstance(): CompanyService {
    if (!CompanyService.instance) {
      CompanyService.instance = new CompanyService()
    }
    return CompanyService.instance
  }

  async createCompany(data: Omit<CompanyInformation, 'id'>): Promise<string> {
    try {
      // Validate data
      const validationErrors = validateCompanyData(data)
      if (validationErrors.length > 0) {
        const errorMessage = validationErrors.map(e => e.message).join(', ')
        console.error('Validation errors:', errorMessage)
        throw new Error(`Validation failed: ${errorMessage}`)
      }

      // Create document in Firestore
      const docRef = await addDoc(collection(db, 'companies'), {
        ...data,
        createdAt: data.createdAt || Timestamp.now(),
        updatedAt: data.updatedAt || Timestamp.now()
      })
      
      return docRef.id
    } catch (error) {
      console.error('Error creating company:', error)
      throw error instanceof Error ? error : new Error('Failed to create company')
    }
  }
}

export const companyService = CompanyService.getInstance()