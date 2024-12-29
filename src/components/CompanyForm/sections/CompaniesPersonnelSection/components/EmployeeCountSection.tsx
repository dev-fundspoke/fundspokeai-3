import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'

export function EmployeeCountSection() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            required
            type="text"
            name="employeeCount.quarterYear"
            label="Quarter and Year"
            value={formik.values.employeeCount?.quarterYear || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Q1-2024"
            error={
              formik.touched.employeeCount?.quarterYear && 
              Boolean(formik.errors.employeeCount?.quarterYear)
            }
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name="employeeCount.fullTime"
            label="Full-Time Employees"
            value={formik.values.employeeCount?.fullTime || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0 }}
            error={
              formik.touched.employeeCount?.fullTime && 
              Boolean(formik.errors.employeeCount?.fullTime)
            }
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name="employeeCount.partTime"
            label="Part-Time Employees"
            value={formik.values.employeeCount?.partTime || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0 }}
            error={
              formik.touched.employeeCount?.partTime && 
              Boolean(formik.errors.employeeCount?.partTime)
            }
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            required
            type="number"
            name="employeeCount.contract"
            label="Contract Employees"
            value={formik.values.employeeCount?.contract || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0 }}
            error={
              formik.touched.employeeCount?.contract && 
              Boolean(formik.errors.employeeCount?.contract)
            }
          />
        </GlassFormField>
      </Grid>
    </Grid>
  )
}