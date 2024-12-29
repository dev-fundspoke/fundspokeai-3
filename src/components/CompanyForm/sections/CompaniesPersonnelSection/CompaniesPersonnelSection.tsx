import { Grid } from '@mui/material'
import { ManagementSection } from './components/ManagementSection'
import { OwnershipSection } from './components/OwnershipSection'
import { EmployeeCountSection } from './components/EmployeeCountSection'
import { SectionTitle, SubsectionTitle } from '../CompanyInformationSection/styles'

export function CompaniesPersonnelSection() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>Companies Personnel</SectionTitle>
      </Grid>

      <Grid item xs={12}>
        <SubsectionTitle>Management Demographics</SubsectionTitle>
        <ManagementSection />
      </Grid>

      <Grid item xs={12}>
        <SubsectionTitle>Ownership Demographics</SubsectionTitle>
        <OwnershipSection />
      </Grid>

      <Grid item xs={12}>
        <SubsectionTitle>Employee Count</SubsectionTitle>
        <EmployeeCountSection />
      </Grid>
    </Grid>
  )
}