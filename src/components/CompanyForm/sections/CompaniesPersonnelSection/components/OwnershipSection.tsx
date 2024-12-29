import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { DEMOGRAPHIC_FIELDS } from '../constants'

export function OwnershipSection() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      {DEMOGRAPHIC_FIELDS.map(field => (
        <Grid item xs={12} sm={6} md={4} key={field.name}>
          <GlassFormField>
            <FormTextField
              type="number"
              name={`ownership.${field.name}`}
              label={field.label}
              value={formik.values.ownership[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              inputProps={{ 
                min: 0,
                max: 100,
                step: 1
              }}
              helperText="Percentage (%)"
              error={
                formik.touched.ownership?.[field.name] && 
                Boolean(formik.errors.ownership?.[field.name])
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
            name="ownership.other"
            label="Other Demographics Notes"
            value={formik.values.ownership.other}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}