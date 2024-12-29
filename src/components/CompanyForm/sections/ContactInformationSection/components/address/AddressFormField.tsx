import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../../context'
import { FormTextField } from '../../../CompanyInformationSection/components/FormTextField'

interface AddressFormFieldProps {
  index: number
}

export function AddressFormField({ index }: AddressFormFieldProps) {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <FormTextField
          required
          name={`addresses.${index}.line1`}
          label="Address Line 1"
          value={formik.values.addresses[index].line1}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormTextField
          name={`addresses.${index}.line2`}
          label="Address Line 2"
          value={formik.values.addresses[index].line2}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormTextField
          required
          name={`addresses.${index}.city`}
          label="City"
          value={formik.values.addresses[index].city}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormTextField
          required
          name={`addresses.${index}.state`}
          label="State/Province"
          value={formik.values.addresses[index].state}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormTextField
          required
          name={`addresses.${index}.zipCode`}
          label="ZIP/Postal Code"
          value={formik.values.addresses[index].zipCode}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormTextField
          required
          name={`addresses.${index}.country`}
          label="Country"
          value={formik.values.addresses[index].country}
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  )
}