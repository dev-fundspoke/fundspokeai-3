import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import { SimpleChart } from '../SimpleChart/SimpleChart'
import { ChartSection } from './ChartSection'
import { applicationData, revenueData, satisfactionData } from './data'

export function KeyAnalyticsPreview() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ 
      bgcolor: '#F5F5F5', 
      p: { xs: 2, sm: 3 }, 
      borderRadius: 2, 
      mt: { xs: 3, sm: 4 } 
    }}>
      <Typography 
        variant="h5" 
        sx={{ 
          color: '#333333', 
          mb: { xs: 2, sm: 3 }, 
          fontWeight: 600,
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
          borderBottom: '2px solid rgba(93, 155, 155, 0.2)',
          pb: 1
        }}
      >
        Key Analytics
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 4 }}>
        <Grid item xs={12}>
          <ChartSection title="Revenue Trend">
            <SimpleChart
              data={revenueData}
              type="line"
              dataKey="revenue"
              xAxisKey="month"
              color="#5D9B9B"
              height={isMobile ? 200 : 300}
            />
          </ChartSection>
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartSection title="Customer Satisfaction">
            <SimpleChart
              data={satisfactionData}
              type="pie"
              dataKey="value"
              xAxisKey="name"
              color="#6495ED"
              height={isMobile ? 200 : 300}
            />
          </ChartSection>
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartSection title="Funding Application Status">
            <SimpleChart
              data={applicationData}
              type="bar"
              dataKey="count"
              xAxisKey="status"
              color="#33B0B0"
              height={isMobile ? 200 : 300}
            />
          </ChartSection>
        </Grid>
      </Grid>
    </Box>
  )
}