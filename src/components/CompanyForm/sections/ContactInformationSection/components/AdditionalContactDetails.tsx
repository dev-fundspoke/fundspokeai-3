import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useCompanyFormContext } from '../../../context/CompanyFormContext'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'

export function AdditionalContactDetails() {
  const { formik } = useCompanyFormContext()

  return (
    <Accordion
      sx={{
        backgroundColor: 'transparent',
        '&:before': {
          display: 'none', // Removes the default divider
        },
        boxShadow: 'none',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: 'rgba(93, 155, 155, 0.1)',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: 'rgba(93, 155, 155, 0.15)',
          },
        }}
      >
        <Typography>Additional Contact Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <GlassFormField>
              <FormTextField
                name="contactDetails.phone"
                label="Phone Number"
                value={formik.values.contactDetails?.phone || ''}
                onChange={formik.handleChange}
                placeholder="+1 (555) 555-5555"
              />
            </GlassFormField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <GlassFormField>
              <FormTextField
                name="contactDetails.fax"
                label="Fax Number"
                value={formik.values.contactDetails?.fax || ''}
                onChange={formik.handleChange}
                placeholder="+1 (555) 555-5555"
              />
            </GlassFormField>
          </Grid>

          <Grid item xs={12}>
            <GlassFormField>
              <FormTextField
                name="contactDetails.email"
                label="General Email"
                type="email"
                value={formik.values.contactDetails?.email || ''}
                onChange={formik.handleChange}
                placeholder="contact@company.com"
              />
            </GlassFormField>
          </Grid>

          <Grid item xs={12}>
            <GlassFormField>
              <FormTextField
                name="contactDetails.alternativeEmail"
                label="Alternative Email"
                type="email"
                value={formik.values.contactDetails?.alternativeEmail || ''}
                onChange={formik.handleChange}
                placeholder="alternative@company.com"
              />
            </GlassFormField>
          </Grid>

          <Grid item xs={12}>
            <GlassFormField>
              <FormTextField
                multiline
                rows={4}
                name="contactDetails.notes"
                label="Contact Notes"
                value={formik.values.contactDetails?.notes || ''}
                onChange={formik.handleChange}
                placeholder="Additional contact information..."
              />
            </GlassFormField>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}