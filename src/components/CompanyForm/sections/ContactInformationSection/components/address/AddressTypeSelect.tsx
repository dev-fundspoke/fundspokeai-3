import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCompanyFormContext } from '../../../../context'

interface AddressTypeSelectProps {
  index: number
}

export function AddressTypeSelect({ index }: AddressTypeSelectProps) {
  const { formik } = useCompanyFormContext()

  return (
    <FormControl fullWidth required>
      <InputLabel>Address Type</InputLabel>
      <Select
        name={`addresses.${index}.type`}
        value={formik.values.addresses[index].type}
        onChange={formik.handleChange}
        label="Address Type"
      >
        <MenuItem value="Business">Business</MenuItem>
        <MenuItem value="Legal/Mailing">Legal/Mailing</MenuItem>
      </Select>
    </FormControl>
  )
}