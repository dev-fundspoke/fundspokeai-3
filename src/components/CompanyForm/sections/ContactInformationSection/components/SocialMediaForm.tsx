import { Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useCompanyFormContext } from '../../../context'
import { SocialMediaField } from './social/SocialMediaField'

export function SocialMediaForm() {
  const { formik } = useCompanyFormContext()

  const handleAddSocialMedia = () => {
    formik.setFieldValue('socialMediaLinks', [
      ...formik.values.socialMediaLinks,
      { platform: '', url: '' }
    ])
  }

  const handleRemoveSocialMedia = (index: number) => {
    const newLinks = formik.values.socialMediaLinks.filter((_, i) => i !== index)
    formik.setFieldValue('socialMediaLinks', newLinks)
  }

  return (
    <Grid container spacing={2}>
      {formik.values.socialMediaLinks.map((_, index) => (
        <Grid item xs={12} key={index}>
          <SocialMediaField
            index={index}
            onRemove={() => handleRemoveSocialMedia(index)}
          />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button
          startIcon={<AddIcon />}
          onClick={handleAddSocialMedia}
          variant="outlined"
          fullWidth
        >
          Add Social Media Link
        </Button>
      </Grid>
    </Grid>
  )
}