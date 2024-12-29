import * as Yup from 'yup'

export const companyFormValidationSchema = Yup.object().shape({
  // ... existing validation ...

  annualFinancials: Yup.object().shape({
    year: Yup.number()
      .required('Year is required')
      .min(1900, 'Year must be after 1900')
      .max(new Date().getFullYear(), 'Year cannot be in the future'),
    revenue: Yup.number()
      .required('Revenue is required')
      .min(0, 'Revenue must be non-negative'),
    profit: Yup.number()
      .required('Profit is required')
      .min(0, 'Profit must be non-negative'),
    rdExpense: Yup.number()
      .required('R&D Expense is required')
      .min(0, 'R&D Expense must be non-negative')
  }),

  financialStatements: Yup.object().shape({
    documentCategory: Yup.string()
      .required('Document category is required'),
    documentType: Yup.string()
      .required('Document type is required'),
    fileId: Yup.string()
      .required('Financial statement document is required')
  })
})