import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { FormTextField } from './FormTextField'

export function CompanyScores() {
  const { formik } = useCompanyFormContext()

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="customerSatisfactionScore"
            label="Customer Satisfaction Score"
            value={formik.values.customerSatisfactionScore || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0, max: 100 }}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="grantMatchScore"
            label="Grant Match Score"
            value={formik.values.grantMatchScore || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0, max: 100 }}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="innovationScore"
            label="Innovation Score"
            value={formik.values.innovationScore || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0, max: 100 }}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="queryPerformanceScore"
            label="Query Performance Score"
            value={formik.values.queryPerformanceScore || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0, max: 100 }}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="totalEmployeeCount"
            label="Total Employee Count"
            value={formik.values.totalEmployeeCount || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0 }}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            multiline
            rows={4}
            name="environmentalImpact"
            label="Environmental Impact"
            value={formik.values.environmentalImpact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>
    </>
  )
}