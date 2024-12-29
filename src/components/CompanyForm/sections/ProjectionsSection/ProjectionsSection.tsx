import { Grid } from '@mui/material'
import { SectionTitle } from '../CompanyInformationSection/styles'
import { RevenueProjections } from './components/RevenueProjections'
import { GrowthPlans } from './components/GrowthPlans'

export function ProjectionsSection() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>Projections</SectionTitle>
      </Grid>

      <Grid item xs={12}>
        <RevenueProjections />
      </Grid>

      <Grid item xs={12}>
        <GrowthPlans />
      </Grid>
    </Grid>
  )
}