import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { SupportingDocuments } from './SupportingDocuments'

interface TechnologyFormProps {
  index: number
}

export function TechnologyForm({ index }: TechnologyFormProps) {
  const { formik } = useCompanyFormContext()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            required
            name={`technologies.${index}.name`}
            label="Technology Name"
            value={formik.values.technologies[index].name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            required
            multiline
            rows={6}
            name={`technologies.${index}.detailedDescription`}
            label="Detailed Description"
            value={formik.values.technologies[index].detailedDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Provide a comprehensive explanation of this technology..."
          />
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <SupportingDocuments 
          documents={formik.values.technologies[index].supportingDocuments}
          onUpdateDocuments={(docs) => 
            formik.setFieldValue(`technologies.${index}.supportingDocuments`, docs)
          }
        />
      </Grid>
    </Grid>
  )
}