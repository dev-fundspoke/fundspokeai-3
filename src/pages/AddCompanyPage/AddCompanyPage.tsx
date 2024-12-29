import { Box, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { DashboardLayout } from '../../components/DashboardLayout/DashboardLayout'
import { Header } from '../../components/Header/Header'
import { CompanyForm } from '../../components/CompanyForm/CompanyForm'

export function AddCompanyPage() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  return (
    <DashboardLayout header={<Header />}>
      <Container maxWidth="lg">
        <Box sx={{ 
          backgroundColor: '#F7F3F0', 
          padding: '2rem',
          borderRadius: 2,
          minHeight: '100vh'
        }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ 
              color: '#333333',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 600,
              textShadow: '0 0 3px #00FFFF'
            }}
          >
            Add New Company
          </Typography>

          <CompanyForm 
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
        </Box>
      </Container>
    </DashboardLayout>
  )
}