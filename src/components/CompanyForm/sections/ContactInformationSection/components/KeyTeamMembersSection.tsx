import { Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { TeamMemberForm } from './TeamMemberForm'

export function KeyTeamMembersSection() {
  const { formik } = useCompanyFormContext()

  const handleAddTeamMember = () => {
    const newTeamMember = {
      name: '',
      role: '',
      contactInfo: {
        email: '',
        phone: ''
      },
      linkedInProfile: '',
      notes: ''
    }

    formik.setFieldValue('keyTeamMembers', [
      ...(formik.values.keyTeamMembers || []),
      newTeamMember
    ])
  }

  return (
    <Grid container spacing={3}>
      {formik.values.keyTeamMembers?.map((member, index) => (
        <Grid item xs={12} key={index}>
          <GlassFormField>
            <TeamMemberForm index={index} />
          </GlassFormField>
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button
          startIcon={<AddIcon />}
          onClick={handleAddTeamMember}
          variant="outlined"
          fullWidth
        >
          Add Team Member
        </Button>
      </Grid>
    </Grid>
  )
}