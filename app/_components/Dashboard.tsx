'use client'
import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import Details from './Details'
import Overview from './Overview'
import Chart from './Chart'
import StockContext from '../Context/StockContext'
// import { fetchStockDetails, fetchQuote } from '../utils/api/stock-api'
import ThemeContext from '../Context/ThemeContext'

const Dashboard = () => {
  //Context state
  const { darkMode } = useContext(ThemeContext)
  const { stockSymbol } = useContext(StockContext)

  //Local state
  const [stockDetails, setStockDetails] = useState<any>({ })
  const [quote, setQuote] = useState<any>({ pc: '', d: '', dp: '', currency: '' })

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        // const result = await fetchStockDetails(stockSymbol)
        let result = { name: '' }
        setStockDetails(result)
      } catch (error) {
        setStockDetails({})
        console.log(error)
      }
    }

    const updateStockOverview = async () => {
      try {
        // const result = await fetchQuote(stockSymbol)
        let result = {}
        setQuote(result)
      } catch (error) {
        setQuote({})
        console.log(error)
      }
    }

    updateStockDetails()
    updateStockOverview()
  }, [stockSymbol])
  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-neutral-100'
      }`}
    >
      <div className="flex items-center justify-start col-span-1 row-span-1 md:col-span-2 xl:col-span-3">
        <Header name={stockDetails.name} />
      </div>
      <div className="row-span-4 md:col-span-2">
        {/* <Chart /> */}
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
  )
}

export default Dashboard
