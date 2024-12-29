import { Grid } from '@mui/material'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { SocialMediaForm } from './SocialMediaForm'

export function SocialMediaSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GlassFormField>
          <SocialMediaForm />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}