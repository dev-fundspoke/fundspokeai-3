import { Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { GlassFormField } from '../../CompanyInformationSection/styles'
import { DragDropUpload } from '../../../../DragDropUpload/DragDropUpload'
import { DocumentList } from './DocumentList'
import { DOCUMENT_CATEGORIES, DOCUMENT_TYPES } from '../constants'
import { useState } from 'react'
import { useFileUpload } from '../../../../../hooks/useFileUpload'
import { InvestmentDocument } from '../../../types/investmentTypes'

interface InvestmentDocumentsProps {
  documents: InvestmentDocument[]
  onUpdateDocuments: (documents: InvestmentDocument[]) => void
}

export function InvestmentDocuments({ 
  documents, 
  onUpdateDocuments 
}: InvestmentDocumentsProps) {
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const { uploadFile } = useFileUpload('investmentDocuments')

  const handleFileSelect = async (file: File) => {
    try {
      const url = await uploadFile(file)
      
      const newDocument: InvestmentDocument = {
        fileId: url,
        fileName: file.name,
        documentCategory: category,
        documentType: type,
        date: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      onUpdateDocuments([...documents, newDocument])
      
      setCategory('')
      setType('')
    } catch (error) {
      console.error('Document upload failed:', error)
    }
  }

  const handleDeleteDocument = (index: number) => {
    const newDocs = documents.filter((_, i) => i !== index)
    onUpdateDocuments(newDocs)
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
          documents={documents}
          onDelete={handleDeleteDocument}
        />
      </Grid>
    </Grid>
  )
}