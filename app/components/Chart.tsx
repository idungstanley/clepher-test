import React, { useEffect, useContext, useState } from 'react'
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from 'recharts'
import Card from './Card'
import ThemeContext from '../Context/ThemeContext'
import StockContext from '../Context/StockContext'
import { fetchWeeklyAdjustedData } from '../features/stock/stockService'
import { formatStockData } from '../utils/helpers/formatData'
import { ChartProps } from '../types/index.interface';

const Chart = () => {
  const [data, setData] = useState<ChartProps[]>()

  const { darkMode } = useContext(ThemeContext)

  const { stockSymbol } = useContext(StockContext)

  useEffect(() => {
    const updateChartData = async () => {
      try {
        const result = await fetchWeeklyAdjustedData(stockSymbol)
        setData(formatStockData(result))
      } catch (error) {
        setData([])
        console.log(error)
      }
    }

    updateChartData()
  }, [stockSymbol])

  return (
    <Card>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? '#312e81' : 'rgb(199 210 254)'}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? '#312e81' : 'rgb(199 210 254)'}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="y"
            stroke="#312e81"
            fillOpacity={1}
            fill="url(#chartColor)"
            strokeWidth={0.5}
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: '#111827' } : {}}
            itemStyle={darkMode ? { color: '#818cf8' } : {}}
          />
          <XAxis dataKey="x" />
          <YAxis domain={['dataMin', 'dataMax']} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default Chart
