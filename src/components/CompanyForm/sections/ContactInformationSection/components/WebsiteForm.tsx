import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'

export function WebsiteForm() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormTextField
          name="website"
          label="Company Website"
          value={formik.values.website}
          onChange={formik.handleChange}
          placeholder="https://example.com"
          fullWidth
        />
      </Grid>
    </Grid>
  )
}