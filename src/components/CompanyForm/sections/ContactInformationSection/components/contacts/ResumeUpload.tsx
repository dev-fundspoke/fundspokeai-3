import { Box, Typography, IconButton, Link } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DescriptionIcon from '@mui/icons-material/Description'
import { useFileUpload } from '../../../../../../hooks/useFileUpload'
import { useCompanyFormContext } from '../../../../context'

interface ResumeUploadProps {
  fieldPrefix: string
  isPrimary: boolean
  index: number
}

export function ResumeUpload({ fieldPrefix, isPrimary, index }: ResumeUploadProps) {
  const { formik } = useCompanyFormContext()
  const { uploadFile, uploading, progress } = useFileUpload()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const url = await uploadFile(file)
      formik.setFieldValue(`${fieldPrefix}.resumeMetadata`, {
        url,
        fileName: file.name
      })
    } catch (error) {
      console.error('Resume upload failed:', error)
    }
  }

  const handleDelete = () => {
    formik.setFieldValue(`${fieldPrefix}.resumeMetadata`, null)
  }

  const currentValue = isPrimary 
    ? formik.values.contacts[index].resumeMetadata 
    : formik.values.secondaryContact.resumeMetadata

  return (
    <Box>
      <input
        accept=".pdf,.doc,.docx"
        type="file"
        id={`resume-upload-${fieldPrefix}`}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      
      {currentValue ? (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          border: '1px solid rgba(93, 155, 155, 0.5)',
          borderRadius: 1
        }}>
          <DescriptionIcon color="primary" />
          <Link 
            href={currentValue.url} 
            target="_blank"
            rel="noopener noreferrer"
            sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {currentValue.fileName}
          </Link>
          <IconButton 
            onClick={handleDelete}
            size="small"
            color="error"
            title="Delete resume"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ) : (
        <label htmlFor={`resume-upload-${fieldPrefix}`}>
          <Box
            sx={{
              border: '2px dashed rgba(93, 155, 155, 0.5)',
              borderRadius: 1,
              p: 2,
              cursor: 'pointer',
              textAlign: 'center',
              '&:hover': {
                borderColor: '#33B0B0',
                bgcolor: 'rgba(51, 176, 176, 0.05)'
              }
            }}
          >
            {uploading ? (
              <Typography>Uploading... {Math.round(progress)}%</Typography>
            ) : (
              <Typography>Click to upload resume</Typography>
            )}
          </Box>
        </label>
      )}
    </Box>
  )
}