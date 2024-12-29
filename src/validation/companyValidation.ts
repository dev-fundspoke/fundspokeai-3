import * as Yup from 'yup'

export const companyValidationSchema = Yup.object().shape({
  // Company Information
  companyName: Yup.object().shape({
    en: Yup.string().required('English company name is required'),
    fr: Yup.string().required('French company name is required')
  }),
  corporationNumber: Yup.string().required('Corporation number is required'),
  federalBusinessRegistryNumber: Yup.number()
    .min(1, 'Federal business registry number must be positive')
    .required('Federal business registry number is required'),
  organizationType: Yup.string().required('Organization type is required'),
  sector: Yup.array()
    .min(1, 'At least one sector must be selected')
    .required('Sector is required'),

  // Performance Metrics
  customerSatisfactionScore: Yup.number()
    .min(0, 'Score must be between 0 and 100')
    .max(100, 'Score must be between 0 and 100')
    .nullable(),
  grantMatchScore: Yup.number()
    .min(0, 'Score must be between 0 and 100')
    .max(100, 'Score must be between 0 and 100')
    .nullable(),
  innovationScore: Yup.number()
    .min(0, 'Score must be between 0 and 100')
    .max(100, 'Score must be between 0 and 100')
    .nullable(),
  queryPerformanceScore: Yup.number()
    .min(0, 'Score must be between 0 and 100')
    .max(100, 'Score must be between 0 and 100')
    .nullable(),
  totalEmployeeCount: Yup.number()
    .min(0, 'Employee count must be non-negative')
    .nullable(),

  // Other fields remain the same...
})