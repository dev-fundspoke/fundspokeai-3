import { Box, Typography, CircularProgress, Button } from '@mui/material'
import { useFileUpload } from '../../../../../hooks/useFileUpload'

interface FinancialFileUploadProps {
  onUploadComplete: (url: string, fileName: string) => void
  disabled?: boolean
}

export function FinancialFileUpload({ 
  onUploadComplete, 
  disabled = false 
}: FinancialFileUploadProps) {
  const { uploadFile, uploading, progress, error } = useFileUpload('financial-documents')

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const url = await uploadFile(file)
      onUploadComplete(url, file.name)
    } catch (error) {
      console.error('Financial document upload failed:', error)
    }
  }

  return (
    <Box>
      <input
        accept=".pdf,.doc,.docx,.xls,.xlsx"
        type="file"
        id="financial-document"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        disabled={disabled || uploading}
      />
      <label htmlFor="financial-document">
        <Button
          variant="outlined"
          component="span"
          disabled={disabled || uploading}
          fullWidth
          sx={{
            height: 100,
            border: '2px dashed rgba(93, 155, 155, 0.5)',
            '&:hover': {
              border: '2px dashed #33B0B0'
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
          ) : (
            <Typography color="textSecondary">
              Click to upload financial document
            </Typography>
          )}
        </Button>
      </label>

      {error && (
        <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
          {error}
        </Typography>
      )}
    </Box>
  )
}