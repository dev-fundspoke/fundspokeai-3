import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'

export function TechnologyDescription() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            required
            multiline
            rows={6}
            name="technologyDescription.detailedDescription"
            label="Detailed Technology Description"
            value={formik.values.technologyDescription?.detailedDescription || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.technologyDescription?.detailedDescription && 
              Boolean(formik.errors.technologyDescription?.detailedDescription)
            }
            helperText={
              formik.touched.technologyDescription?.detailedDescription && 
              formik.errors.technologyDescription?.detailedDescription
            }
            placeholder="Provide a comprehensive explanation of your company's technology..."
          />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}