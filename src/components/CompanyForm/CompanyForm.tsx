import { Box, Button, CircularProgress, Alert, Tab, Tabs } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { CompanyFormProvider } from './context/CompanyFormContext'
import { TabPanel } from '../TabPanel/TabPanel'
import { 
  CompanyInformationSection,
  FinancialInformationSection,
  CompaniesPersonnelSection,
  ContactInformationSection,
  IpPortfolioSection,
  TechnologySection,
  InvestmentHistorySection,
  DebtInformationSection,
  ProjectionsSection
} from './sections'

interface CompanyFormProps {
  activeTab: number
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void
}

export function CompanyForm({ activeTab, handleTabChange }: CompanyFormProps) {
  return (
    <ErrorBoundary>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CompanyFormProvider>
          {({ formik, isSubmitting, error, companyId }) => (
            <Box 
              component="form" 
              onSubmit={formik.handleSubmit}
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                minHeight: '80vh'
              }}
            >
              {error && <Alert severity="error">{error}</Alert>}
              {companyId && <Alert severity="success">Company created successfully!</Alert>}

              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                  value={activeTab} 
                  onChange={handleTabChange} 
                  aria-label="company form tabs"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Company Information" />
                  <Tab label="Financial Information" />
                  <Tab label="Companies Personnel" />
                  <Tab label="Contact Information" />
                  <Tab label="IP Portfolio" />
                  <Tab label="Technology" />
                  <Tab label="Investment History" />
                  <Tab label="Debt Information" />
                  <Tab label="Projections" />
                </Tabs>
              </Box>

              <Box sx={{ flex: 1, overflowY: 'auto' }}>
                <TabPanel value={activeTab} index={0}>
                  <CompanyInformationSection />
                </TabPanel>
                <TabPanel value={activeTab} index={1}>
                  <FinancialInformationSection />
                </TabPanel>
                <TabPanel value={activeTab} index={2}>
                  <CompaniesPersonnelSection />
                </TabPanel>
                <TabPanel value={activeTab} index={3}>
                  <ContactInformationSection />
                </TabPanel>
                <TabPanel value={activeTab} index={4}>
                  <IpPortfolioSection />
                </TabPanel>
                <TabPanel value={activeTab} index={5}>
                  <TechnologySection />
                </TabPanel>
                <TabPanel value={activeTab} index={6}>
                  <InvestmentHistorySection />
                </TabPanel>
                <TabPanel value={activeTab} index={7}>
                  <DebtInformationSection />
                </TabPanel>
                <TabPanel value={activeTab} index={8}>
                  <ProjectionsSection />
                </TabPanel>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 'auto', pt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ minWidth: 120 }}
                >
                  {isSubmitting ? (
                    <>
                      <CircularProgress size={20} sx={{ mr: 1 }} />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </Box>
            </Box>
          )}
        </CompanyFormProvider>
      </LocalizationProvider>
    </ErrorBoundary>
  )
}