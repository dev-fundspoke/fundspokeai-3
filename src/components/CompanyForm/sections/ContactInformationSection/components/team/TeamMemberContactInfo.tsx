import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../../context'
import { FormTextField } from '../../../CompanyInformationSection/components/FormTextField'

interface TeamMemberContactInfoProps {
  index: number
}

export function TeamMemberContactInfo({ index }: TeamMemberContactInfoProps) {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={2}>
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
    </Grid>
  )
}