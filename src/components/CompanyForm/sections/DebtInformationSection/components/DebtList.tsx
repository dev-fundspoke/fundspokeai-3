import { Box, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCompanyFormContext } from '../../../context'
import { DebtForm } from './DebtForm'

export function DebtList() {
  const { formik } = useCompanyFormContext()

  const handleRemoveDebt = (index: number) => {
    const newDebts = formik.values.debts.filter((_, i) => i !== index)
    formik.setFieldValue('debts', newDebts)
  }

  return (
    <Box>
      {formik.values.debts?.map((_, index) => (
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
            onClick={() => handleRemoveDebt(index)}
            sx={{ position: 'absolute', top: 8, right: 8 }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 3 }}>
            Debt #{index + 1}
          </Typography>

          <DebtForm index={index} />
        </Box>
      ))}
    </Box>
  )
}