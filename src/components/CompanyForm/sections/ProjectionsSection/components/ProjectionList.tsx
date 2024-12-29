import { Box, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCompanyFormContext } from '../../../context'
import { ProjectionForm } from './ProjectionForm'

export function ProjectionList() {
  const { formik } = useCompanyFormContext()

  const handleRemoveProjection = (index: number) => {
    const newProjections = formik.values.projections.revenueProjections.filter((_, i) => i !== index)
    formik.setFieldValue('projections.revenueProjections', newProjections)
  }

  return (
    <Box>
      {formik.values.projections?.revenueProjections?.map((_, index) => (
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
            onClick={() => handleRemoveProjection(index)}
            sx={{ position: 'absolute', top: 8, right: 8 }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 3 }}>
            Projection #{index + 1}
          </Typography>

          <ProjectionForm index={index} />
        </Box>
      ))}
    </Box>
  )
}