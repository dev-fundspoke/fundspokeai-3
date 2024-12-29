import { Grid } from '@mui/material'
import { ContactForm } from './ContactForm'

export function SecondaryContact() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ContactForm 
          index={0}
          isPrimary={false}
          isSecondary={true}
        />
      </Grid>
    </Grid>
  )
}