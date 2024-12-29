import { Timestamp } from 'firebase/firestore'
import { CompanyFormValues } from '../types/formTypes'
import { CompanyInformation } from '../../../types/company'
import { personnelService } from '../../../services/company/personnelService'
import { contactService } from '../../../services/company/contactService'

export async function transformCompanyData(
  values: CompanyFormValues, 
  companyId: string
): Promise<void> {
  try {
    // Create personnel data
    await personnelService.createPersonnelData(companyId, {
      management: values.management,
      ownership: values.ownership,
      employeeCount: values.employeeCount
    })

    // Create contacts
    await contactService.createContacts(
      companyId,
      values.contacts,
      values.secondaryContact
    )

    // Return transformed company data
    return {
      companyName: {
        en: values.companyName.en.trim(),
        fr: values.companyName.fr.trim(),
      },
      corporationNumber: values.corporationNumber.trim(),
      federalBusinessRegistryNumber: Number(values.federalBusinessRegistryNumber),
      incorporationDate: values.incorporationDate ? Timestamp.fromDate(values.incorporationDate) : null,
      organizationType: values.organizationType,
      sector: values.sector,
      companyLogo: values.companyLogo?.trim() || '',
      customerSatisfactionScore: values.customerSatisfactionScore,
      environmentalImpact: values.environmentalImpact?.trim() || '',
      grantMatchScore: values.grantMatchScore,
      innovationScore: values.innovationScore,
      queryPerformanceScore: values.queryPerformanceScore,
      totalEmployeeCount: values.totalEmployeeCount,
      aiAnalysis: {
        aiAnalysisDate: values.aiAnalysis.aiAnalysisDate ? 
          Timestamp.fromDate(values.aiAnalysis.aiAnalysisDate) : null,
        aiAnalysisReady: values.aiAnalysis.aiAnalysisReady,
        aiImprovementRecommendations: values.aiAnalysis.aiImprovementRecommendations?.trim() || '',
        aiReadinessDetails: values.aiAnalysis.aiReadinessDetails?.trim() || '',
      },
      clientId: values.clientId?.trim() || '',
      annualFinancials: {
        year: values.annualFinancials.year,
        revenue: values.annualFinancials.revenue,
        profit: values.annualFinancials.profit,
        rdExpense: values.annualFinancials.rdExpense,
      },
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }
  } catch (error) {
    console.error('Error transforming company data:', error)
    throw error
  }
}