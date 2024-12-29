import { Grid } from '@mui/material'
import { CompanyNames } from './components/CompanyNames'
import { CompanyLogo } from './components/CompanyLogo'
import { RegistrationNumbers } from './components/RegistrationNumbers'
import { OrganizationDetails } from './components/OrganizationDetails'
import { SectorSelect } from './components/SectorSelect'
import { CompanyScores } from './components/CompanyScores'
import { AiAnalysis } from './components/AiAnalysis'
import { ClientDetails } from './components/ClientDetails'
import { SectionTitle, SubsectionTitle } from './styles'

export function CompanyInformationSection() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>Company Information</SectionTitle>
      </Grid>

      {/* Basic Information */}
      <Grid item xs={12}>
        <SubsectionTitle>Basic Information</SubsectionTitle>
        <Grid container spacing={3}>
          <CompanyNames />
          <CompanyLogo />
        </Grid>
      </Grid>

      {/* Registration Details */}
      <Grid item xs={12}>
        <SubsectionTitle>Registration Details</SubsectionTitle>
        <Grid container spacing={3}>
          <RegistrationNumbers />
          <OrganizationDetails />
        </Grid>
      </Grid>

      {/* Industry & Classification */}
      <Grid item xs={12}>
        <SubsectionTitle>Industry & Classification</SubsectionTitle>
        <Grid container spacing={3}>
          <SectorSelect />
        </Grid>
      </Grid>

      {/* Performance Metrics */}
      <Grid item xs={12}>
        <SubsectionTitle>Performance Metrics</SubsectionTitle>
        <Grid container spacing={3}>
          <CompanyScores />
        </Grid>
      </Grid>

      {/* AI Analysis */}
      <Grid item xs={12}>
        <SubsectionTitle>AI Analysis</SubsectionTitle>
        <Grid container spacing={3}>
          <AiAnalysis />
        </Grid>
      </Grid>

      {/* Client Information */}
      <Grid item xs={12}>
        <SubsectionTitle>Client Information</SubsectionTitle>
        <Grid container spacing={3}>
          <ClientDetails />
        </Grid>
      </Grid>
    </Grid>
  )
}