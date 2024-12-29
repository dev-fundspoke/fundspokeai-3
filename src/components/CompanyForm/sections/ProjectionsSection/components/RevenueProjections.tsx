import { Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useCompanyFormContext } from '../../../context'
import { ProjectionList } from './ProjectionList'
import { SubsectionTitle } from '../../CompanyInformationSection/styles'

export function RevenueProjections() {
  const { formik } = useCompanyFormContext()

  const handleAddProjection = () => {
    const newProjection = {
      id: `proj-${Date.now()}`,
      amount: 0,
      confidenceLevel: '',
      projectionSources: '',
      startDate: null,
      endDate: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    formik.setFieldValue('projections.revenueProjections', [
      ...(formik.values.projections?.revenueProjections || []),
      newProjection
    ])
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SubsectionTitle>Future Revenue Projections</SubsectionTitle>
      </Grid>

      <Grid item xs={12}>
        <ProjectionList />
      </Grid>

      <Grid item xs={12}>
        <Button
          startIcon={<AddIcon />}
          onClick={handleAddProjection}
          variant="outlined"
          fullWidth
        >
          Add Revenue Projection
        </Button>
      </Grid>
    </Grid>
  )
}