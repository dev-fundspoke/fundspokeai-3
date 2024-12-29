export interface InvestorInfo {
  contact: string
  details: string
  name: string
}

export interface InvestmentDocument {
  fileId: string
  fileName: string
  documentCategory: string
  documentType: string
  date: string
  createdAt: string
  updatedAt: string
}

export interface Investment {
  id: string
  amountReceived: number
  date: string
  investorInfo: InvestorInfo
  supportingDocuments: InvestmentDocument[]
  createdAt: string
  updatedAt: string
}