import { Grid, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCompanyFormContext } from '../../../context'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'

interface TeamMemberFormProps {
  index: number
}

export function TeamMemberForm({ index }: TeamMemberFormProps) {
  const { formik } = useCompanyFormContext()

  const handleRemove = () => {
    const newTeamMembers = formik.values.keyTeamMembers.filter((_, i) => i !== index)
    formik.setFieldValue('keyTeamMembers', newTeamMembers)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={11}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormTextField
              required
              name={`keyTeamMembers.${index}.name`}
              label="Name"
              value={formik.values.keyTeamMembers[index].name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormTextField
              required
              name={`keyTeamMembers.${index}.role`}
              label="Role"
              value={formik.values.keyTeamMembers[index].role}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormTextField
              required
              type="email"
              name={`keyTeamMembers.${index}.contactInfo.email`}
              label="Email"
              value={formik.values.keyTeamMembers[index].contactInfo.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormTextField
              name={`keyTeamMembers.${index}.contactInfo.phone`}
              label="Phone"
              value={formik.values.keyTeamMembers[index].contactInfo.phone}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              name={`keyTeamMembers.${index}.linkedInProfile`}
              label="LinkedIn Profile"
              value={formik.values.keyTeamMembers[index].linkedInProfile}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              multiline
              rows={3}
              name={`keyTeamMembers.${index}.notes`}
              label="Notes"
              value={formik.values.keyTeamMembers[index].notes}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={handleRemove} color="error">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}