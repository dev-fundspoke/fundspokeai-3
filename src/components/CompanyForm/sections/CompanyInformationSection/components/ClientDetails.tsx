import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { FormTextField } from './FormTextField'

export function ClientDetails() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid item xs={12}>
      <GlassFormField>
        <FormTextField
          name="clientId"
          label="Client ID"
          value={formik.values.clientId}
          onChange={formik.handleChange}
        />
      </GlassFormField>
    </Grid>
  )
}