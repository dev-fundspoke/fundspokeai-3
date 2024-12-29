import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { PAYMENT_SCHEDULES } from '../constants'

interface PaymentScheduleSelectProps {
  index: number
}

export function PaymentScheduleSelect({ index }: PaymentScheduleSelectProps) {
  const { formik } = useCompanyFormContext()

  return (
    <FormControl fullWidth required>
      <InputLabel>Payment Schedule</InputLabel>
      <Select
        name={`debts.${index}.paymentSchedule`}
        value={formik.values.debts[index].paymentSchedule}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="Payment Schedule"
      >
        {PAYMENT_SCHEDULES.map(schedule => (
          <MenuItem key={schedule} value={schedule}>{schedule}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}