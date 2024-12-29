import { Box, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCompanyFormContext } from '../../../context'
import { TechnologyForm } from './TechnologyForm'

export function TechnologyList() {
  const { formik } = useCompanyFormContext()

  const handleRemoveTechnology = (index: number) => {
    const newTechnologies = formik.values.technologies.filter((_, i) => i !== index)
    formik.setFieldValue('technologies', newTechnologies)
  }

  return (
    <Box>
      {formik.values.technologies?.map((_, index) => (
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
            onClick={() => handleRemoveTechnology(index)}
            sx={{ position: 'absolute', top: 8, right: 8 }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 3 }}>
            Technology #{index + 1}
          </Typography>

          <TechnologyForm index={index} />
        </Box>
      ))}
    </Box>
  )
}