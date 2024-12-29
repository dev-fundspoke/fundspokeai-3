import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../context'
import { GlassFormField } from './CompanyInformationSection/styles'
import { FormTextField } from './CompanyInformationSection/components/FormTextField'

export function ContactInformationSection() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            fullWidth
            label="Address Line 1"
            name="address.line1"
            value={formik.values.address?.line1 || ''}
            onChange={formik.handleChange}
            error={formik.touched.address?.line1 && Boolean(formik.errors.address?.line1)}
            helperText={formik.touched.address?.line1 && formik.errors.address?.line1}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            fullWidth
            label="Address Line 2"
            name="address.line2"
            value={formik.values.address?.line2 || ''}
            onChange={formik.handleChange}
            error={formik.touched.address?.line2 && Boolean(formik.errors.address?.line2)}
            helperText={formik.touched.address?.line2 && formik.errors.address?.line2}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            fullWidth
            label="City"
            name="address.city"
            value={formik.values.address?.city || ''}
            onChange={formik.handleChange}
            error={formik.touched.address?.city && Boolean(formik.errors.address?.city)}
            helperText={formik.touched.address?.city && formik.errors.address?.city}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            fullWidth
            label="State/Province"
            name="address.state"
            value={formik.values.address?.state || ''}
            onChange={formik.handleChange}
            error={formik.touched.address?.state && Boolean(formik.errors.address?.state)}
            helperText={formik.touched.address?.state && formik.errors.address?.state}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            fullWidth
            label="Postal Code"
            name="address.zipCode"
            value={formik.values.address?.zipCode || ''}
            onChange={formik.handleChange}
            error={formik.touched.address?.zipCode && Boolean(formik.errors.address?.zipCode)}
            helperText={formik.touched.address?.zipCode && formik.errors.address?.zipCode}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            fullWidth
            label="Country"
            name="address.country"
            value={formik.values.address?.country || ''}
            onChange={formik.handleChange}
            error={formik.touched.address?.country && Boolean(formik.errors.address?.country)}
            helperText={formik.touched.address?.country && formik.errors.address?.country}
          />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}