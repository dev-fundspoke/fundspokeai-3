import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context/CompanyFormContext'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { FinancialFileUpload } from './FileUpload'

export function FinancialForm() {
  const { formik } = useCompanyFormContext()

  const handleFileUpload = (url: string) => {
    formik.setFieldValue('financialStatements.fileId', url)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name="annualFinancials.revenue"
            label="Annual Revenue"
            value={formik.values.annualFinancials.revenue}
            onChange={formik.handleChange}
            error={
              formik.touched.annualFinancials?.revenue && 
              Boolean(formik.errors.annualFinancials?.revenue)
            }
            helperText={
              formik.touched.annualFinancials?.revenue && 
              formik.errors.annualFinancials?.revenue
            }
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name="annualFinancials.profit"
            label="Annual Profit"
            value={formik.values.annualFinancials.profit}
            onChange={formik.handleChange}
            error={
              formik.touched.annualFinancials?.profit && 
              Boolean(formik.errors.annualFinancials?.profit)
            }
            helperText={
              formik.touched.annualFinancials?.profit && 
              formik.errors.annualFinancials?.profit
            }
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name="annualFinancials.rdExpense"
            label="R&D Expenses"
            value={formik.values.annualFinancials.rdExpense}
            onChange={formik.handleChange}
            error={
              formik.touched.annualFinancials?.rdExpense && 
              Boolean(formik.errors.annualFinancials?.rdExpense)
            }
            helperText={
              formik.touched.annualFinancials?.rdExpense && 
              formik.errors.annualFinancials?.rdExpense
            }
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FinancialFileUpload onUploadComplete={handleFileUpload} />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}