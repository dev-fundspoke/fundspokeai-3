export interface DebtDocument {
  fileId: string
  fileName: string
  documentCategory: string
  documentType: string
  date: string
  createdAt: string
  updatedAt: string
}

export interface Debt {
  id: string
  currentDebtAmount: number
  debtType: string
  notes: string
  paymentSchedule: string
  supportingDocuments: DebtDocument[]
  createdAt: string
  updatedAt: string
}