import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { GrowthPlanDocuments } from './GrowthPlanDocuments'
import { SubsectionTitle } from '../../CompanyInformationSection/styles'

export function GrowthPlans() {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SubsectionTitle>Growth Plans</SubsectionTitle>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            required
            multiline
            rows={6}
            name="projections.growthPlans.plans"
            label="Growth Plans"
            value={formik.values.projections?.growthPlans?.plans}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Describe your company's growth plans and strategies..."
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GrowthPlanDocuments />
      </Grid>
    </Grid>
  )
}