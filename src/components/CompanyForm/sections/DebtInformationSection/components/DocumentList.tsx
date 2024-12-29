import { 
  Box, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemSecondaryAction,
  Typography 
} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { DebtDocument } from '../../../types/debtTypes'

interface DocumentListProps {
  documents: DebtDocument[]
  onDelete: (index: number) => void
}

export function DocumentList({ documents, onDelete }: DocumentListProps) {
  if (documents.length === 0) {
    return (
      <Typography color="textSecondary" sx={{ mt: 2, textAlign: 'center' }}>
        No documents uploaded yet
      </Typography>
    )
  }

  return (
    <List>
      {documents.map((doc, index) => (
        <ListItem
          key={index}
          sx={{
            bgcolor: 'background.paper',
            mb: 1,
            borderRadius: 1,
            border: '1px solid rgba(0, 0, 0, 0.12)'
          }}
        >
          <ListItemText
            primary={doc.fileName}
            secondary={`${doc.documentCategory} - ${doc.documentType}`}
          />
          <ListItemSecondaryAction>
            <IconButton 
              edge="end" 
              aria-label="delete"
              onClick={() => onDelete(index)}
              sx={{ color: 'error.main' }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}