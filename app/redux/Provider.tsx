'use client'
import { Provider } from 'react-redux'
import React, { Suspense, useState } from 'react'
import { store } from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ClipLoader } from 'react-spinners'
import StockContext from '../Context/StockContext';
import ThemeContext from '../Context/ThemeContext';

export function Providers({ children }: React.PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(false)
  const [stockSymbol, setStockSymbol] = useState('IBM')

  return (
      <Provider store={store}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-screen">
              <ClipLoader
                color="#03246ddd"
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          }
        >
          <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
              {children}
            </StockContext.Provider>
          </ThemeContext.Provider>
        </Suspense>
        <ToastContainer position="top-right" />
      </Provider>
  )
}
