export interface TechnologyDocument {
  fileId: string
  fileName: string
  documentCategory: string
  documentType: string
  createdAt: string
  updatedAt: string
}

export interface TechnologyDescription {
  detailedDescription: string
  supportingDocuments: TechnologyDocument[]
  createdAt: string
  updatedAt: string
}