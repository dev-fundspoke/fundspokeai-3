import { Grid } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { SelectField } from '../../../../shared/FormFields/SelectField'
import { CONFIDENCE_LEVELS } from '../constants'

interface ProjectionFormProps {
  index: number
}

export function ProjectionForm({ index }: ProjectionFormProps) {
  const { formik } = useCompanyFormContext()
  const basePath = `projections.revenueProjections.${index}`

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name={`${basePath}.amount`}
            label="Projected Amount"
            value={formik.values.projections.revenueProjections[index].amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0 }}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <SelectField
            required
            name={`${basePath}.confidenceLevel`}
            label="Confidence Level"
            value={formik.values.projections.revenueProjections[index].confidenceLevel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            options={CONFIDENCE_LEVELS}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <DatePicker
            label="Start Date"
            value={formik.values.projections.revenueProjections[index].startDate}
            onChange={(date) => formik.setFieldValue(`${basePath}.startDate`, date)}
            slotProps={{ textField: { fullWidth: true, required: true } }}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <DatePicker
            label="End Date"
            value={formik.values.projections.revenueProjections[index].endDate}
            onChange={(date) => formik.setFieldValue(`${basePath}.endDate`, date)}
            slotProps={{ textField: { fullWidth: true, required: true } }}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            required
            multiline
            rows={4}
            name={`${basePath}.projectionSources`}
            label="Projection Sources"
            value={formik.values.projections.revenueProjections[index].projectionSources}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Describe the sources used for this projection (e.g., market trends, historical data)"
          />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}