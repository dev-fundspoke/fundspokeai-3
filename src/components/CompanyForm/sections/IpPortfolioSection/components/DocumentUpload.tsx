import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { DragDropUpload } from '../../../../DragDropUpload/DragDropUpload'
import { useFileUpload } from '../../../../../hooks/useFileUpload'
import { DOCUMENT_CATEGORIES, DOCUMENT_TYPES } from '../constants'

interface DocumentUploadProps {
  index: number
}

export function DocumentUpload({ index }: DocumentUploadProps) {
  const { formik } = useCompanyFormContext()
  const { uploadFile } = useFileUpload('ipPortfolioDocuments')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const handleFileSelect = async (file: File) => {
    try {
      const url = await uploadFile(file)
      const newDocument = {
        id: `doc-${Date.now()}`,
        fileId: url,
        fileName: file.name,
        documentCategory: selectedCategory,
        documentType: selectedType,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      const currentDocs = formik.values.ipPortfolios[index].supportingDocuments || []
      formik.setFieldValue(`ipPortfolios.${index}.supportingDocuments`, [...currentDocs, newDocument])
      
      // Reset selections after successful upload
      setSelectedCategory('')
      setSelectedType('')
    } catch (error) {
      console.error('Document upload failed:', error)
    }
  }

  const handleRemoveDocument = (docIndex: number) => {
    const newDocs = formik.values.ipPortfolios[index].supportingDocuments.filter((_, i) => i !== docIndex)
    formik.setFieldValue(`ipPortfolios.${index}.supportingDocuments`, newDocs)
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="subtitle1" gutterBottom>Supporting Documents</Typography>
      
      {formik.values.ipPortfolios[index].supportingDocuments.map((doc, docIndex) => (
        <Box
          key={doc.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
            p: 2,
            border: '1px solid rgba(93, 155, 155, 0.3)',
            borderRadius: 1
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2">{doc.fileName}</Typography>
            <Typography variant="caption" color="textSecondary">
              {doc.documentCategory} - {doc.documentType}
            </Typography>
          </Box>
          <IconButton
            onClick={() => handleRemoveDocument(docIndex)}
            size="small"
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}

      <GlassFormField>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Document Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            label="Document Category"
          >
            {DOCUMENT_CATEGORIES.map(category => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Document Type</InputLabel>
          <Select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            label="Document Type"
          >
            {DOCUMENT_TYPES.map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <DragDropUpload
          onFileSelect={handleFileSelect}
          accept=".pdf,.doc,.docx"
          disabled={!selectedCategory || !selectedType}
        />
      </GlassFormField>
    </Box>
  )
}