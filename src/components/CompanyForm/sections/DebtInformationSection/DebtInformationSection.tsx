import { Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { DebtList } from './components/DebtList'
import { SectionTitle } from '../CompanyInformationSection/styles'
import { useCompanyFormContext } from '../../context'

export function DebtInformationSection() {
  const { formik } = useCompanyFormContext()

  const handleAddDebt = () => {
    const newDebt = {
      id: `debt-${Date.now()}`,
      currentDebtAmount: 0,
      debtType: '',
      notes: '',
      paymentSchedule: '',
      supportingDocuments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    formik.setFieldValue('debts', [
      ...(formik.values.debts || []),
      newDebt
    ])
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>Debt Information</SectionTitle>
      </Grid>

      <Grid item xs={12}>
        <DebtList />
      </Grid>

      <Grid item xs={12}>
        <Button
          startIcon={<AddIcon />}
          onClick={handleAddDebt}
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        >
          Add Debt
        </Button>
      </Grid>
    </Grid>
  )
}