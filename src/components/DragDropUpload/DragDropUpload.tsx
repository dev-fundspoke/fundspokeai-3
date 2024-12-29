import { Box, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { styled } from '@mui/material/styles'

const DropZone = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDragging' && prop !== 'disabled'
})<{ isDragging: boolean; disabled: boolean }>(({ theme, isDragging, disabled }) => ({
  border: `2px dashed ${isDragging ? theme.palette.primary.main : 'rgba(93, 155, 155, 0.5)'}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  backgroundColor: isDragging ? 'rgba(93, 155, 155, 0.1)' : 'transparent',
  transition: 'all 0.2s ease',
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.5 : 1,
  minHeight: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  '&:hover': {
    borderColor: !disabled && theme.palette.primary.main,
    backgroundColor: !disabled && 'rgba(93, 155, 155, 0.05)'
  }
}))

interface DragDropUploadProps {
  onFileSelect: (file: File) => void
  accept?: string
  maxSize?: number
  disabled?: boolean
}

export function DragDropUpload({
  onFileSelect,
  accept = '.pdf,.doc,.docx,.xls,.xlsx',
  maxSize = 10 * 1024 * 1024, // 10MB default
  disabled = false
}: DragDropUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled) setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const validateFile = (file: File): string | null => {
    if (!accept.split(',').some(type => file.name.toLowerCase().endsWith(type.trim()))) {
      return 'File type not supported'
    }
    if (file.size > maxSize) {
      return `File size must be less than ${maxSize / 1024 / 1024}MB`
    }
    return null
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (disabled) return

    const file = e.dataTransfer.files[0]
    if (!file) return

    const error = validateFile(file)
    if (error) {
      alert(error)
      return
    }

    onFileSelect(file)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const error = validateFile(file)
    if (error) {
      alert(error)
      return
    }

    onFileSelect(file)
  }

  return (
    <Box>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInput}
        style={{ display: 'none' }}
        disabled={disabled}
      />
      <DropZone
        isDragging={isDragging}
        disabled={disabled}
        onClick={() => !disabled && fileInputRef.current?.click()}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Typography color="textSecondary">
          {disabled ? (
            'Please select category and type first'
          ) : (
            <>
              Drag and drop a file here, or click to select
              <br />
              <Typography variant="caption" component="span" display="block" sx={{ mt: 1 }}>
                Supported formats: PDF, DOC, DOCX, XLS, XLSX
                <br />
                Maximum size: {maxSize / 1024 / 1024}MB
              </Typography>
            </>
          )}
        </Typography>
      </DropZone>
    </Box>
  )
}