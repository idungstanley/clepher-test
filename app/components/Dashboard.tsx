'use client'
import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import Details, { DetailsProps } from './Details'
import Overview from './Overview'
import Chart from './Chart'
import StockContext from '../Context/StockContext'
import ThemeContext from '../Context/ThemeContext'
import { fetchQuote, fetchStockDetails } from '../features/stock/stockService'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { setQuoteResult } from '../features/stock/stockSlice'

const Dashboard = () => {
  //Context state
  const { darkMode } = useContext(ThemeContext)
  const { stockSymbol } = useContext(StockContext)

  const dispatch = useAppDispatch()
  const { quoteResult } = useAppSelector((state) => state.stock)

  //Local state
  const [stockDetails, setStockDetails] = useState<DetailsProps | null>(null)

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol)
        setStockDetails(result)
      } catch (error) {
        setStockDetails(null)
        console.log(error)
      }
    }

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol)
        dispatch(setQuoteResult(result['Global Quote']))
      } catch (error) {
        dispatch(setQuoteResult(null))
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
        <Header name={stockDetails?.Name as string} />
      </div>
      <div className="row-span-4 md:col-span-2">
        <Chart />
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quoteResult?.price}
          change={quoteResult?.change}
          changePercent={quoteResult?.cp}
          currency={stockDetails?.Currency as string}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails as DetailsProps} />
      </div>
    </div>
  )
}

export default Dashboard
