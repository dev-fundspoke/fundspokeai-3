import { Grid } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { InvestmentDocuments } from './InvestmentDocuments'

interface InvestmentFormProps {
  index: number
}

export function InvestmentForm({ index }: InvestmentFormProps) {
  const { formik } = useCompanyFormContext()

  const handleDateChange = (date: Date | null) => {
    formik.setFieldValue(
      `investments.${index}.date`, 
      date ? date.toISOString() : null
    )
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name={`investments.${index}.amountReceived`}
            label="Amount Received"
            value={formik.values.investments[index].amountReceived}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0 }}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <DatePicker
            label="Investment Date"
            value={formik.values.investments[index].date ? new Date(formik.values.investments[index].date) : null}
            onChange={handleDateChange}
            slotProps={{ 
              textField: { 
                fullWidth: true,
                required: true
              } 
            }}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            required
            name={`investments.${index}.investorInfo.name`}
            label="Investor Name"
            value={formik.values.investments[index].investorInfo.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            required
            name={`investments.${index}.investorInfo.contact`}
            label="Investor Contact"
            value={formik.values.investments[index].investorInfo.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            multiline
            rows={4}
            name={`investments.${index}.investorInfo.details`}
            label="Investor Details"
            value={formik.values.investments[index].investorInfo.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <InvestmentDocuments 
          documents={formik.values.investments[index].supportingDocuments}
          onUpdateDocuments={(docs) => 
            formik.setFieldValue(`investments.${index}.supportingDocuments`, docs)
          }
        />
      </Grid>
    </Grid>
  )
}