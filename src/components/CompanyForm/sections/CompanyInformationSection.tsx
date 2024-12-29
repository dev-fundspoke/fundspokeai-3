import { Grid, TextField } from '@mui/material'
import { useCompanyFormContext } from '../context'

export function CompanyInformationSection() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Company Name (English)"
          name="companyName.en"
          value={formik.values.companyName.en}
          onChange={formik.handleChange}
          error={formik.touched.companyName?.en && Boolean(formik.errors.companyName?.en)}
          helperText={formik.touched.companyName?.en && formik.errors.companyName?.en}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Company Name (French)"
          name="companyName.fr"
          value={formik.values.companyName.fr}
          onChange={formik.handleChange}
          error={formik.touched.companyName?.fr && Boolean(formik.errors.companyName?.fr)}
          helperText={formik.touched.companyName?.fr && formik.errors.companyName?.fr}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Corporation Number"
          name="corporationNumber"
          value={formik.values.corporationNumber}
          onChange={formik.handleChange}
          error={formik.touched.corporationNumber && Boolean(formik.errors.corporationNumber)}
          helperText={formik.touched.corporationNumber && formik.errors.corporationNumber}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Website"
          name="website"
          value={formik.values.website}
          onChange={formik.handleChange}
          error={formik.touched.website && Boolean(formik.errors.website)}
          helperText={formik.touched.website && formik.errors.website}
        />
      </Grid>
    </Grid>
  )
}