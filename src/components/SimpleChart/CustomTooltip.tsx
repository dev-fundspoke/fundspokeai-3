import { Box, Typography } from '@mui/material'
import { TooltipProps } from 'recharts'

export function CustomTooltip({ 
  active, 
  payload, 
  label 
}: TooltipProps<number, string>) {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        p: 1.5,
        borderRadius: 1,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {label && (
        <Typography
          variant="subtitle2"
          sx={{ color: '#333333', mb: 0.5 }}
        >
          {label}
        </Typography>
      )}
      {payload.map((item, index) => (
        <Typography
          key={index}
          variant="body2"
          sx={{ 
            color: '#333333',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Box
            component="span"
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: item.color,
            }}
          />
          {`${item.name}: ${item.value}`}
        </Typography>
      ))}
    </Box>
  )
}