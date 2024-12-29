import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { ORGANIZATION_TYPES } from '../constants'

export function OrganizationDetails() {
  const { formik } = useCompanyFormContext()

  return (
    <>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <DatePicker
            label="Incorporation Date"
            value={formik.values.incorporationDate}
            onChange={(date) => formik.setFieldValue('incorporationDate', date)}
            slotProps={{ 
              textField: { 
                fullWidth: true,
                error: formik.touched.incorporationDate && Boolean(formik.errors.incorporationDate),
                helperText: formik.touched.incorporationDate && formik.errors.incorporationDate
              } 
            }}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormControl fullWidth required>
            <InputLabel>Organization Type</InputLabel>
            <Select
              name="organizationType"
              value={formik.values.organizationType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.organizationType && Boolean(formik.errors.organizationType)}
              label="Organization Type"
            >
              {ORGANIZATION_TYPES.map(type => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </GlassFormField>
      </Grid>
    </>
  )
}