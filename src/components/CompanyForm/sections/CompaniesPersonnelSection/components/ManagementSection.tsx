import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { DEMOGRAPHIC_FIELDS } from '../constants'

export function ManagementSection() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      {DEMOGRAPHIC_FIELDS.map(field => (
        <Grid item xs={12} sm={6} md={4} key={field.name}>
          <GlassFormField>
            <FormTextField
              required
              type="number"
              name={`management.${field.name}`}
              label={field.label}
              value={formik.values.management?.[field.name] ?? ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              inputProps={{ min: 0, max: 100, step: 1 }}
              helperText={
                formik.touched.management?.[field.name] && formik.errors.management?.[field.name]
                  ? formik.errors.management[field.name]
                  : 'Percentage (%)'
              }
              error={
                formik.touched.management?.[field.name] && 
                Boolean(formik.errors.management?.[field.name])
              }
            />
          </GlassFormField>
        </Grid>
      ))}
      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            multiline
            rows={4}
            name="management.other"
            label="Other Demographics Notes"
            value={formik.values.management?.other ?? ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.management?.other && 
              Boolean(formik.errors.management?.other)
            }
            helperText={
              formik.touched.management?.other && formik.errors.management?.other
            }
          />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}