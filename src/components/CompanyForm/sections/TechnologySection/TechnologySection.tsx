import { Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { TechnologyList } from './components/TechnologyList'
import { SectionTitle } from '../CompanyInformationSection/styles'
import { useCompanyFormContext } from '../../context'

export function TechnologySection() {
  const { formik } = useCompanyFormContext()

  const handleAddTechnology = () => {
    const newTechnology = {
      id: `tech-${Date.now()}`,
      name: '',
      detailedDescription: '',
      supportingDocuments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    formik.setFieldValue('technologies', [
      ...(formik.values.technologies || []),
      newTechnology
    ])
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SectionTitle>Technologies</SectionTitle>
      </Grid>

      <Grid item xs={12}>
        <TechnologyList />
      </Grid>

      <Grid item xs={12}>
        <Button
          startIcon={<AddIcon />}
          onClick={handleAddTechnology}
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        >
          Add Technology
        </Button>
      </Grid>
    </Grid>
  )
}