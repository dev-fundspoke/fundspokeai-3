import { Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useCompanyFormContext } from '../../../../context'
import { ContactForm } from './ContactForm'

export function PrimaryContacts() {
  const { formik } = useCompanyFormContext()

  const handleAddContact = () => {
    const newContact = {
      contactId: `contact-${Date.now()}`,
      name: '',
      role: '',
      contactInfo: {
        email: '',
        phone: ''
      },
      linkedInProfile: '',
      resumeMetadata: '',
      notes: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    formik.setFieldValue('contacts', [
      ...(formik.values.contacts || []),
      newContact
    ])
  }

  return (
    <Grid container spacing={3}>
      {formik.values.contacts?.map((contact, index) => (
        <Grid item xs={12} key={contact.contactId}>
          <ContactForm 
            index={index}
            isPrimary={true}
          />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button
          startIcon={<AddIcon />}
          onClick={handleAddContact}
          variant="outlined"
          fullWidth
        >
          Add Primary Contact
        </Button>
      </Grid>
    </Grid>
  )
}