import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { DEBT_TYPES } from '../constants'

interface DebtTypeSelectProps {
  index: number
}

export function DebtTypeSelect({ index }: DebtTypeSelectProps) {
  const { formik } = useCompanyFormContext()

  return (
    <FormControl fullWidth required>
      <InputLabel>Debt Type</InputLabel>
      <Select
        name={`debts.${index}.debtType`}
        value={formik.values.debts[index].debtType}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Debt Type"
      >
        {DEBT_TYPES.map(type => (
          <MenuItem key={type} value={type}>{type}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}