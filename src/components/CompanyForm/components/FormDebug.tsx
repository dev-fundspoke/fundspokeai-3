import { Box, Typography } from '@mui/material'
import { useCompanyFormContext } from '../context/CompanyFormContext'

export function FormDebug() {
  const { formik } = useCompanyFormContext()
  
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(0,0,0,0.05)', borderRadius: 1 }}>
      <Typography variant="caption" component="div">
        Form State:
        <pre style={{ margin: 0 }}>
          {JSON.stringify({
            isValid: formik.isValid,
            dirty: formik.dirty,
            isSubmitting: formik.isSubmitting,
            submitCount: formik.submitCount,
            errors: Object.keys(formik.errors),
          }, null, 2)}
        </pre>
      </Typography>
    </Box>
  )
}