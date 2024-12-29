import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { AddressForm } from './AddressForm'
import { WebsiteForm } from './WebsiteForm'

export function AddressSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GlassFormField>
          <AddressForm />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <WebsiteForm />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}