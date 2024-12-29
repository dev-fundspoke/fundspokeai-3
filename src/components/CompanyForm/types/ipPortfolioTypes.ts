import { Timestamp } from 'firebase/firestore'

export interface SupportingDocument {
  id: string
  fileId: string
  fileName: string
  documentCategory: string
  documentType: string
  createdAt: Timestamp | string
  updatedAt: Timestamp | string
}

export interface IpPortfolio {
  ipId: string
  type: string
  title: string
  description: string
  notes: string
  createdAt: Timestamp | string
  updatedAt: Timestamp | string
  supportingDocuments: SupportingDocument[]
}

export interface IpPortfolioFormValues {
  ipPortfolios: IpPortfolio[]
}