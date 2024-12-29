import { Grid, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useCompanyFormContext } from '../../../../context'
import { FormTextField } from '../../../CompanyInformationSection/components/FormTextField'

interface SocialMediaFieldProps {
  index: number
  onRemove: () => void
}

export function SocialMediaField({ index, onRemove }: SocialMediaFieldProps) {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={5}>
        <FormTextField
          required
          name={`socialMediaLinks.${index}.platform`}
          label="Platform"
          value={formik.values.socialMediaLinks[index].platform}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <FormTextField
          required
          name={`socialMediaLinks.${index}.url`}
          label="URL"
          value={formik.values.socialMediaLinks[index].url}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={onRemove} color="error">
          <DeleteOutlineIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}