export interface CompanyInformation {
  companyName: {
    en: string
    fr: string
  }
  corporationNumber: string
  federalBusinessRegistryNumber: number
  incorporationDate: Date | null
  organizationType: string
  sector: string[]
  companyLogo: string
  customerSatisfactionScore: number | null
  environmentalImpact: string
  grantMatchScore: number | null
  innovationScore: number | null
  queryPerformanceScore: number | null
  totalEmployeeCount: number | null
  aiAnalysis: {
    aiAnalysisDate: Date | null
    aiAnalysisReady: boolean
    aiImprovementRecommendations: string
    aiReadinessDetails: string
  }
  clientId: string
  createdAt: Date
  updatedAt: Date
}