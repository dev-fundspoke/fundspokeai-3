import { Grid } from '@mui/material'
import { AddressSection } from './components/AddressSection'
import { KeyTeamMembersSection } from './components/KeyTeamMembersSection'
import { SocialMediaSection } from './components/SocialMediaSection'
import { ContactsSection } from './components/ContactsSection'
import { SectionTitle, SubsectionTitle } from '../CompanyInformationSection/styles'

export function ContactInformationSection() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>Contact Information</SectionTitle>
      </Grid>

      <Grid item xs={12}>
        <SubsectionTitle>Address Information</SubsectionTitle>
        <AddressSection />
      </Grid>

      <Grid item xs={12}>
        <SubsectionTitle>Social Media</SubsectionTitle>
        <SocialMediaSection />
      </Grid>

      <Grid item xs={12}>
        <SubsectionTitle>Key Team Members</SubsectionTitle>
        <KeyTeamMembersSection />
      </Grid>

      <Grid item xs={12}>
        <ContactsSection />
      </Grid>
    </Grid>
  )
}