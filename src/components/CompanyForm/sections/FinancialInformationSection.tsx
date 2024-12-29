import { Grid, TextField } from '@mui/material'
import { useCompanyFormContext } from '../context'

export function FinancialInformationSection() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="number"
          label="Current Debt Amount"
          name="currentDebtAmount"
          value={formik.values.currentDebtAmount}
          onChange={formik.handleChange}
          error={formik.touched.currentDebtAmount && Boolean(formik.errors.currentDebtAmount)}
          helperText={formik.touched.currentDebtAmount && formik.errors.currentDebtAmount}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Debt Type"
          name="debtType"
          value={formik.values.debtType}
          onChange={formik.handleChange}
          error={formik.touched.debtType && Boolean(formik.errors.debtType)}
          helperText={formik.touched.debtType && formik.errors.debtType}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Financial Notes"
          name="notes"
          value={formik.values.notes}
          onChange={formik.handleChange}
          error={formik.touched.notes && Boolean(formik.errors.notes)}
          helperText={formik.touched.notes && formik.errors.notes}
        />
      </Grid>
    </Grid>
  )
}