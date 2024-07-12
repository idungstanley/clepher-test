'use client'
import { Provider } from 'react-redux'
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React, { Suspense, useState } from 'react'
import { store } from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Notify from '../lib/notify'
import { ClipLoader } from 'react-spinners'
import StockContext from '../Context/StockContext';
import ThemeContext from '../Context/ThemeContext';

export function Providers({ children }: React.PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(false)
  const [stockSymbol, setStockSymbol] = useState('FB')
  const onError = (error: unknown): unknown => {
    let title: string
    if (!error) {
      title = 'Oops! An internal server error occurred.'
      Notify({ type: 'errror', text: title })
      return
    }
  }

  const onSuccess = (data: unknown): unknown => {
    let title: string
    const typedSuccess = data

    if (!typedSuccess) {
      return
    } else {
      title = 'Successfully retrieved'
    }
    Notify({ type: 'success', text: title })
  }
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
    mutationCache: new MutationCache({
      onError,
      onSuccess,
    }),
    queryCache: new QueryCache({
      onError,
      onSuccess,
    }),
  })
  const [client] = React.useState(queryClient)

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-screen">
              <ClipLoader
                color="#03246ddd"
                size={20}
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
    </QueryClientProvider>
  )
}
