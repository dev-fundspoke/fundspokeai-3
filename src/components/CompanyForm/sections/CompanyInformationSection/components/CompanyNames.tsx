import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { FormTextField } from './FormTextField'

export function CompanyNames() {
  const { formik } = useCompanyFormContext()

  return (
    <>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            name="companyName.en"
            label="Company Name (English)"
            value={formik.values.companyName.en}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.companyName?.en && Boolean(formik.errors.companyName?.en)}
            helperText={formik.touched.companyName?.en && formik.errors.companyName?.en}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            name="companyName.fr"
            label="Company Name (French)"
            value={formik.values.companyName.fr}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.companyName?.fr && Boolean(formik.errors.companyName?.fr)}
            helperText={formik.touched.companyName?.fr && formik.errors.companyName?.fr}
          />
        </GlassFormField>
      </Grid>
    </>
  )
}