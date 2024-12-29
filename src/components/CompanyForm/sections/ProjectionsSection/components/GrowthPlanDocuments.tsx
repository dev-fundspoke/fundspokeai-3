import { Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { DragDropUpload } from '../../../../DragDropUpload/DragDropUpload'
import { DocumentList } from '../../../../shared/DocumentList/DocumentList'
import { useFileUpload } from '../../../../../hooks/useFileUpload'
import { DOCUMENT_CATEGORIES, DOCUMENT_TYPES } from '../constants'

export function GrowthPlanDocuments() {
  const { formik } = useCompanyFormContext()
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const { uploadFile } = useFileUpload('growthPlanDocuments')

  const handleFileSelect = async (file: File) => {
    try {
      const url = await uploadFile(file)
      
      const newDocument = {
        fileId: url,
        fileName: file.name,
        documentCategory: category,
        documentType: type,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      const currentDocs = formik.values.projections?.growthPlans?.supportingDocuments || []
      formik.setFieldValue('projections.growthPlans.supportingDocuments', [...currentDocs, newDocument])
      
      setCategory('')
      setType('')
    } catch (error) {
      console.error('Document upload failed:', error)
    }
  }

  const handleDeleteDocument = (index: number) => {
    const newDocs = formik.values.projections.growthPlans.supportingDocuments.filter((_, i) => i !== index)
    formik.setFieldValue('projections.growthPlans.supportingDocuments', newDocs)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GlassFormField>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Document Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Document Category"
                >
                  {DOCUMENT_CATEGORIES.map(cat => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Document Type</InputLabel>
                <Select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  label="Document Type"
                >
                  {DOCUMENT_TYPES.map(t => (
                    <MenuItem key={t} value={t}>{t}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <DragDropUpload
                onFileSelect={handleFileSelect}
                disabled={!category || !type}
                accept=".pdf,.doc,.docx"
              />
            </Grid>
          </Grid>
        </GlassFormField>
      </Grid>

      <Grid item xs={12}>
        <DocumentList
          documents={formik.values.projections?.growthPlans?.supportingDocuments || []}
          onDelete={handleDeleteDocument}
        />
      </Grid>
    </Grid>
  )
}