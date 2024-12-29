import { Box, Button, IconButton, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCompanyFormContext } from '../../../context'
import { IpDetailsForm } from './IpDetailsForm'
import { DocumentUpload } from './DocumentUpload'

export function IpPortfolioList() {
  const { formik } = useCompanyFormContext()

  const handleAddIpPortfolio = () => {
    const newIpPortfolio = {
      ipId: `ip-${Date.now()}`,
      type: '',
      title: '',
      description: '',
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      supportingDocuments: []
    }

    formik.setFieldValue('ipPortfolios', [
      ...(formik.values.ipPortfolios || []),
      newIpPortfolio
    ])
  }

  const handleRemoveIpPortfolio = (index: number) => {
    const newIpPortfolios = formik.values.ipPortfolios.filter((_, i) => i !== index)
    formik.setFieldValue('ipPortfolios', newIpPortfolios)
  }

  return (
    <Box>
      {formik.values.ipPortfolios?.map((_, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            mb: 4,
            p: 3,
            border: '1px solid rgba(93, 155, 155, 0.3)',
            borderRadius: 1
          }}
        >
          <IconButton
            onClick={() => handleRemoveIpPortfolio(index)}
            sx={{ position: 'absolute', top: 8, right: 8 }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 3 }}>
            IP Portfolio Entry #{index + 1}
          </Typography>

          <IpDetailsForm index={index} />
          <DocumentUpload index={index} />
        </Box>
      ))}

      <Button
        startIcon={<AddIcon />}
        onClick={handleAddIpPortfolio}
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
      >
        Add IP Portfolio Entry
      </Button>
    </Box>
  )
}