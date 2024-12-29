import { Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { InvestmentList } from './components/InvestmentList'
import { SectionTitle } from '../CompanyInformationSection/styles'
import { useCompanyFormContext } from '../../context'

export function InvestmentHistorySection() {
  const { formik } = useCompanyFormContext()

  const handleAddInvestment = () => {
    const newInvestment = {
      id: `inv-${Date.now()}`,
      amountReceived: 0,
      date: new Date().toISOString(),
      investorInfo: {
        contact: '',
        details: '',
        name: ''
      },
      supportingDocuments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    formik.setFieldValue('investments', [
      ...(formik.values.investments || []),
      newInvestment
    ])
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>Investment History</SectionTitle>
      </Grid>

      <Grid item xs={12}>
        <InvestmentList />
      </Grid>

      <Grid item xs={12}>
        <Button
          startIcon={<AddIcon />}
          onClick={handleAddInvestment}
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        >
          Add Investment
        </Button>
      </Grid>
    </Grid>
  )
}