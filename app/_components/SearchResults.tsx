import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import StockContext from '../Context/StockContext'
import { SearchResultsProps } from '../types/index.interface'

const SearchResults = ({ results }: SearchResultsProps) => {
  //Context state
  const { darkMode } = useContext(ThemeContext)
    const { setStockSymbol } = useContext(StockContext)
    console.log(results)

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll ${
        darkMode
          ? 'bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark'
          : 'bg-white border-neutral-200 custom-scrollbar'
      }`}
    >
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer text-black p-4 m-2 flex items-center justify-between rounded-md transition duration-300 ${
              darkMode ? 'hover:bg-indigo-600' : 'hover:bg-indigo-200 '
            }`}
            onClick={() => setStockSymbol(item.symbol)}
          >
            <span className='text-black'>{item.symbol}</span>
            <span>{item.name}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default SearchResults
