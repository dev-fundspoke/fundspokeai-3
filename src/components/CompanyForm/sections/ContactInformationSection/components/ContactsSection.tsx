import { Grid } from '@mui/material'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { PrimaryContacts } from './contacts/PrimaryContacts'
import { SecondaryContact } from './contacts/SecondaryContact'
import { SubsectionTitle } from '../../CompanyInformationSection/styles'

export function ContactsSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SubsectionTitle>Primary Contacts</SubsectionTitle>
        <GlassFormField>
          <PrimaryContacts />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <SubsectionTitle>Secondary Contact</SubsectionTitle>
        <GlassFormField>
          <SecondaryContact />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}