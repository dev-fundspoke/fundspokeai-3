export interface ChartData {
  [key: string]: string | number
}

export interface SimpleChartProps {
  data: ChartData[]
  type?: 'line' | 'bar' | 'pie'
  dataKey: string
  xAxisKey: string
  color?: string
  height?: number
}