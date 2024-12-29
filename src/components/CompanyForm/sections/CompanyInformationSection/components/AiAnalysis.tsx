import { Grid, FormControlLabel, Checkbox } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { FormTextField } from './FormTextField'

export function AiAnalysis() {
  const { formik } = useCompanyFormContext()

  return (
    <>
      <Grid item xs={12}>
        <GlassFormField>
          <FormControlLabel
            control={
              <Checkbox
                name="aiAnalysis.aiAnalysisReady"
                checked={formik.values.aiAnalysis.aiAnalysisReady}
                onChange={formik.handleChange}
              />
            }
            label="AI Analysis Ready"
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <DatePicker
            label="AI Analysis Date"
            value={formik.values.aiAnalysis.aiAnalysisDate}
            onChange={(date) => formik.setFieldValue('aiAnalysis.aiAnalysisDate', date)}
            slotProps={{ 
              textField: { 
                fullWidth: true,
                error: formik.touched.aiAnalysis?.aiAnalysisDate && Boolean(formik.errors.aiAnalysis?.aiAnalysisDate),
                helperText: formik.touched.aiAnalysis?.aiAnalysisDate && formik.errors.aiAnalysis?.aiAnalysisDate
              } 
            }}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            multiline
            rows={4}
            name="aiAnalysis.aiImprovementRecommendations"
            label="AI Improvement Recommendations"
            value={formik.values.aiAnalysis.aiImprovementRecommendations}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            multiline
            rows={4}
            name="aiAnalysis.aiReadinessDetails"
            label="AI Readiness Details"
            value={formik.values.aiAnalysis.aiReadinessDetails}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </GlassFormField>
      </Grid>
    </>
  )
}