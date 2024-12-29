import { 
  Box, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select, 
  Typography 
} from '@mui/material'
import { useState } from 'react'
import { useCompanyFormContext } from '../../../context/CompanyFormContext'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { DocumentList } from './DocumentList'
import { DragDropUpload } from '../../../../DragDropUpload/DragDropUpload'
import { useFinancialUpload } from '../../../../../hooks/useFinancialUpload'
import { Timestamp } from 'firebase/firestore'

const DOCUMENT_CATEGORIES = ['Financial', 'Tax', 'Audit', 'Other']
const DOCUMENT_TYPES = [
  'Balance Sheet',
  'Income Statement',
  'Cash Flow Statement',
  'Tax Return',
  'Audit Report',
  'Other'
]

export function DocumentUpload() {
  const { formik } = useCompanyFormContext()
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const { uploadFile, uploading } = useFinancialUpload('temp-company-id') // Replace with actual company ID

  const handleFileSelect = async (file: File) => {
    try {
      const url = await uploadFile(file)
      
      const newDocument = {
        id: Date.now().toString(),
        documentCategory: category,
        documentType: type,
        fileUrl: url,
        fileName: file.name,
        uploadedAt: Timestamp.now()
      }

      formik.setFieldValue('financialDocuments', [
        ...formik.values.financialDocuments,
        newDocument
      ])

      // Reset form
      setCategory('')
      setType('')
    } catch (error) {
      console.error('Document upload failed:', error)
      alert('Failed to upload document. Please try again.')
    }
  }

  const handleDelete = (documentId: string) => {
    formik.setFieldValue(
      'financialDocuments',
      formik.values.financialDocuments.filter(doc => doc.id !== documentId)
    )
  }

  const isUploadDisabled = !category || !type || uploading

  return (
    <GlassFormField>
      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
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

        <FormControl fullWidth sx={{ mb: 2 }}>
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

        <Box sx={{ mb: 2 }}>
          <DragDropUpload
            onFileSelect={handleFileSelect}
            disabled={isUploadDisabled}
          />
        </Box>
      </Box>

      <DocumentList 
        documents={formik.values.financialDocuments} 
        onDelete={handleDelete}
      />
    </GlassFormField>
  )
}