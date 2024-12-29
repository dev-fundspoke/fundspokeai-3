import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Cell,
  Line, 
  LineChart, 
  Pie, 
  PieChart,
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts'
import { CustomTooltip } from './CustomTooltip'
import { GlassContainer } from './components/GlassContainer'
import { getChartColors } from './chartUtils'
import { SimpleChartProps } from './types'

export function SimpleChart({ 
  data, 
  type = 'line', 
  dataKey, 
  xAxisKey,
  color = '#5D9B9B',
  height = 300
}: SimpleChartProps): ReactNode {
  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 10, right: 30, left: 0, bottom: 0 },
    }

    const commonAxisProps = {
      stroke: '#666666',
      style: { fontFamily: 'Roboto, Arial', fill: '#333333' },
    }

    switch (type) {
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E0DC" />
            <XAxis dataKey={xAxisKey} {...commonAxisProps} />
            <YAxis {...commonAxisProps} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey={dataKey} fill={color} animationDuration={1000} />
          </BarChart>
        )

      case 'pie':
        return (
          <PieChart {...commonProps}>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={xAxisKey}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              animationDuration={1000}
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getChartColors()[index % getChartColors().length]} 
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        )

      default: // line
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E0DC" />
            <XAxis dataKey={xAxisKey} {...commonAxisProps} />
            <YAxis {...commonAxisProps} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2}
              dot={{ fill: color }}
              animationDuration={1000}
            />
          </LineChart>
        )
    }
  }

  return (
    <GlassContainer>
      <Box sx={{ width: '100%', height }}>
        <ResponsiveContainer>
          {renderChart()}
        </ResponsiveContainer>
      </Box>
    </GlassContainer>
  )
}