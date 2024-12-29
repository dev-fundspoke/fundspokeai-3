import { Box, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCompanyFormContext } from '../../../context'
import { InvestmentForm } from './InvestmentForm'

export function InvestmentList() {
  const { formik } = useCompanyFormContext()

  const handleRemoveInvestment = (index: number) => {
    const newInvestments = formik.values.investments.filter((_, i) => i !== index)
    formik.setFieldValue('investments', newInvestments)
  }

  return (
    <Box>
      {formik.values.investments?.map((_, index) => (
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
            onClick={() => handleRemoveInvestment(index)}
            sx={{ position: 'absolute', top: 8, right: 8 }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 3 }}>
            Investment #{index + 1}
          </Typography>

          <InvestmentForm index={index} />
        </Box>
      ))}
    </Box>
  )
}