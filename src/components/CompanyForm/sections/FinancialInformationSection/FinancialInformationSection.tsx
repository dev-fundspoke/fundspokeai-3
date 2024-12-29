import { Grid } from '@mui/material'
import { AnnualFinancials } from './components/AnnualFinancials'
import { DocumentUpload } from './components/DocumentUpload'
import { SectionTitle, SubsectionTitle } from '../CompanyInformationSection/styles'

export function FinancialInformationSection() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>Financial Information</SectionTitle>
      </Grid>

      {/* Annual Financials */}
      <Grid item xs={12}>
        <SubsectionTitle>Annual Financials</SubsectionTitle>
        <AnnualFinancials />
      </Grid>

      {/* Financial Documents */}
      <Grid item xs={12}>
        <SubsectionTitle>Financial Documents</SubsectionTitle>
        <DocumentUpload />
      </Grid>
    </Grid>
  )
}