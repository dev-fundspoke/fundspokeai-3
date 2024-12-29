import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { DebtTypeSelect } from './DebtTypeSelect'
import { PaymentScheduleSelect } from './PaymentScheduleSelect'
import { DebtDocuments } from './DebtDocuments'

interface DebtFormProps {
  index: number
}

export function DebtForm({ index }: DebtFormProps) {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name={`debts.${index}.currentDebtAmount`}
            label="Current Debt Amount"
            value={formik.values.debts[index].currentDebtAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0 }}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <DebtTypeSelect index={index} />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <PaymentScheduleSelect index={index} />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            multiline
            rows={4}
            name={`debts.${index}.notes`}
            label="Notes"
            value={formik.values.debts[index].notes}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <DebtDocuments 
          documents={formik.values.debts[index].supportingDocuments}
          onUpdateDocuments={(docs) => 
            formik.setFieldValue(`debts.${index}.supportingDocuments`, docs)
          }
        />
      </Grid>
    </Grid>
  )
}