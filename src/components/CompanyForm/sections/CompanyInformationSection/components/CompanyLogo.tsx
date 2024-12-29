import { Box, Typography, CircularProgress, Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context/CompanyFormContext'
import { GlassFormField } from '../styles'
import { useFileUpload } from '../../../../../hooks/useFileUpload'

export function CompanyLogo() {
  const { formik } = useCompanyFormContext()
  const { uploadFile, uploading, progress, error } = useFileUpload()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const url = await uploadFile(file)
      formik.setFieldValue('companyLogo', url)
    } catch (error) {
      console.error('Logo upload failed:', error)
    }
  }

  return (
    <Grid item xs={12}>
      <GlassFormField>
        <Box sx={{ textAlign: 'center' }}>
          <input
            accept="image/*"
            type="file"
            id="company-logo"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="company-logo">
            <Box
              sx={{
                border: '2px dashed rgba(93, 155, 155, 0.5)',
                borderRadius: 1,
                p: 3,
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: '#33B0B0',
                  bgcolor: 'rgba(51, 176, 176, 0.05)'
                }
              }}
            >
              {uploading ? (
                <Box sx={{ textAlign: 'center' }}>
                  <CircularProgress size={24} sx={{ mb: 1 }} />
                  <Typography variant="body2">
                    Uploading... {Math.round(progress)}%
                  </Typography>
                </Box>
              ) : formik.values.companyLogo ? (
                <Box>
                  <img
                    src={formik.values.companyLogo}
                    alt="Company Logo"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '200px',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              ) : (
                <Typography color="textSecondary">
                  Click or drag to upload company logo
                </Typography>
              )}
            </Box>
          </label>

          {error && (
            <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
              {error}
            </Typography>
          )}
        </Box>
      </GlassFormField>
    </Grid>
  )
}