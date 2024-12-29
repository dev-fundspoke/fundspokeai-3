import { Timestamp } from 'firebase/firestore'

export interface AnnualFinancials {
  year: number
  revenue: number
  profit: number
  rdExpense: number
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface FinancialStatement {
  documentCategory: string
  documentType: string
  fileId: string
  createdAt: Timestamp
  updatedAt: Timestamp
}