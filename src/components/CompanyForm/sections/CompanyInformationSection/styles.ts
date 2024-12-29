import { Box, Typography, styled } from '@mui/material'

export const GlassFormField = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '8px',
  border: '1px solid rgba(93, 155, 155, 0.5)',
  padding: theme.spacing(2),
  height: '100%',
  transition: 'all 0.3s ease'
}))

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#333333',
  fontFamily: 'Rajdhani, sans-serif',
  fontWeight: 600,
  fontSize: '1.5rem',
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  borderBottom: '2px solid rgba(93, 155, 155, 0.2)'
}))

export const SubsectionTitle = styled(Typography)(({ theme }) => ({
  color: '#333333',
  fontFamily: 'Rajdhani, sans-serif',
  fontWeight: 500,
  fontSize: '1.1rem',
  marginBottom: theme.spacing(2)
}))