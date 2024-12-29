import { Grid, TextField } from '@mui/material'
import { useCompanyFormContext } from '../context'

export function DocumentsSection() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Document Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Document Type"
          name="documentType"
          value={formik.values.documentType}
          onChange={formik.handleChange}
          error={formik.touched.documentType && Boolean(formik.errors.documentType)}
          helperText={formik.touched.documentType && formik.errors.documentType}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Notes"
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