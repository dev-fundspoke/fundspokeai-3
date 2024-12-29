import { Grid } from '@mui/material'
import { IpPortfolioList } from './components/IpPortfolioList'
import { SectionTitle } from '../CompanyInformationSection/styles'

export function IpPortfolioSection() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>IP Portfolio</SectionTitle>
      </Grid>

      <Grid item xs={12}>
        <IpPortfolioList />
      </Grid>
    </Grid>
  )
}