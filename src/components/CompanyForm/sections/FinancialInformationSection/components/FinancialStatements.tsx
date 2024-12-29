import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { FormTextField } from '../../CompanyInformationSection/components/FormTextField'
import { FileUpload } from '../../../../FileUpload/FileUpload'
import { DOCUMENT_CATEGORIES, DOCUMENT_TYPES } from '../constants'

export function FinancialStatements() {
  const { formik } = useCompanyFormContext()

  const handleFileUpload = (url: string) => {
    formik.setFieldValue('financialStatements.fileId', url)
  }

  return (
    <>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormControl fullWidth required>
            <InputLabel>Document Category</InputLabel>
            <Select
              name="financialStatements.documentCategory"
              value={formik.values.financialStatements.documentCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.financialStatements?.documentCategory && 
                Boolean(formik.errors.financialStatements?.documentCategory)
              }
              label="Document Category"
            >
              {DOCUMENT_CATEGORIES.map(category => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </GlassFormField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormControl fullWidth required>
            <InputLabel>Document Type</InputLabel>
            <Select
              name="financialStatements.documentType"
              value={formik.values.financialStatements.documentType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.financialStatements?.documentType && 
                Boolean(formik.errors.financialStatements?.documentType)
              }
              label="Document Type"
            >
              {DOCUMENT_TYPES.map(type => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <GlassFormField>
          <FileUpload
            onUploadComplete={handleFileUpload}
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            maxSize={10 * 1024 * 1024} // 10MB limit
          />
        </GlassFormField>
      </Grid>
    </>
  )
}