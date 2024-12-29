import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { FormTextField } from './FormTextField'

export function RegistrationNumbers() {
  const { formik } = useCompanyFormContext()

  return (
    <>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            name="corporationNumber"
            label="Corporation Number"
            value={formik.values.corporationNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.corporationNumber && Boolean(formik.errors.corporationNumber)}
            helperText={formik.touched.corporationNumber && formik.errors.corporationNumber}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name="federalBusinessRegistryNumber"
            label="Federal Business Registry Number"
            value={formik.values.federalBusinessRegistryNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.federalBusinessRegistryNumber && Boolean(formik.errors.federalBusinessRegistryNumber)}
            helperText={formik.touched.federalBusinessRegistryNumber && formik.errors.federalBusinessRegistryNumber}
          />
        </GlassFormField>
      </Grid>
    </>
  )
}