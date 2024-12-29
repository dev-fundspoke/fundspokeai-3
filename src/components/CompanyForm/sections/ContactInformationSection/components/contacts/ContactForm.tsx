import { Grid, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCompanyFormContext } from '../../../../context'
import { FormTextField } from '../../../CompanyInformationSection/components/FormTextField'
import { ResumeUpload } from './ResumeUpload'

interface ContactFormProps {
  index: number
  isPrimary: boolean
  isSecondary?: boolean
}

export function ContactForm({ index, isPrimary, isSecondary }: ContactFormProps) {
  const { formik } = useCompanyFormContext()
  const fieldPrefix = isPrimary ? `contacts.${index}` : 'secondaryContact'

  const handleRemove = () => {
    if (isPrimary) {
      const newContacts = formik.values.contacts.filter((_, i) => i !== index)
      formik.setFieldValue('contacts', newContacts)
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={11}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormTextField
              required
              name={`${fieldPrefix}.name`}
              label="Name"
              value={isPrimary ? formik.values.contacts[index].name : formik.values.secondaryContact.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormTextField
              required
              name={`${fieldPrefix}.role`}
              label="Role"
              value={isPrimary ? formik.values.contacts[index].role : formik.values.secondaryContact.role}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormTextField
              required
              type="email"
              name={`${fieldPrefix}.contactInfo.email`}
              label="Email"
              value={isPrimary ? formik.values.contacts[index].contactInfo.email : formik.values.secondaryContact.contactInfo.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormTextField
              name={`${fieldPrefix}.contactInfo.phone`}
              label="Phone"
              value={isPrimary ? formik.values.contacts[index].contactInfo.phone : formik.values.secondaryContact.contactInfo.phone}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              name={`${fieldPrefix}.linkedInProfile`}
              label="LinkedIn Profile"
              value={isPrimary ? formik.values.contacts[index].linkedInProfile : formik.values.secondaryContact.linkedInProfile}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <ResumeUpload
              fieldPrefix={fieldPrefix}
              isPrimary={isPrimary}
              index={index}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              multiline
              rows={3}
              name={`${fieldPrefix}.notes`}
              label="Notes"
              value={isPrimary ? formik.values.contacts[index].notes : formik.values.secondaryContact.notes}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
      {isPrimary && !isSecondary && (
        <Grid item xs={1}>
          <IconButton onClick={handleRemove} color="error">
            <DeleteIcon />
          </IconButton>
        </Grid>
      )}
    </Grid>
  )
}