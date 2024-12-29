import { Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { IP_TYPES } from '../constants'

interface IpDetailsFormProps {
  index: number
}

export function IpDetailsForm({ index }: IpDetailsFormProps) {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormControl fullWidth required>
            <InputLabel>IP Type</InputLabel>
            <Select
              name={`ipPortfolios.${index}.type`}
              value={formik.values.ipPortfolios[index].type}
              onChange={formik.handleChange}
              label="IP Type"
            >
              {IP_TYPES.map(type => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            required
            name={`ipPortfolios.${index}.title`}
            label="IP Title"
            value={formik.values.ipPortfolios[index].title}
            onChange={formik.handleChange}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            required
            multiline
            rows={4}
            name={`ipPortfolios.${index}.description`}
            label="Description"
            value={formik.values.ipPortfolios[index].description}
            onChange={formik.handleChange}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            multiline
            rows={3}
            name={`ipPortfolios.${index}.notes`}
            label="Notes"
            value={formik.values.ipPortfolios[index].notes}
            onChange={formik.handleChange}
          />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}