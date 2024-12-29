import { BaseDocument } from '../../../types/documents'

export interface RevenueProjection {
  id: string
  amount: number
  confidenceLevel: string
  projectionSources: string
  startDate: Date | null
  endDate: Date | null
  createdAt: string
  updatedAt: string
}

export interface GrowthPlanDocument extends BaseDocument {}

export interface GrowthPlan {
  plans: string
  supportingDocuments: GrowthPlanDocument[]
  createdAt: string
  updatedAt: string
}

export interface Projections {
  revenueProjections: RevenueProjection[]
  growthPlans: GrowthPlan
}