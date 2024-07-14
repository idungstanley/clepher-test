'use client'
import React, { useContext, useState } from 'react'
import ThemeContext from '../Context/ThemeContext'
import SearchResults from './SearchResults'
import { FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { searchSymbol } from '../features/stock/stockService'
import { BestMatches } from '../types/index.interface'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { setSearchResult } from '../features/stock/stockSlice'

const Search = () => {
  const dispatch = useAppDispatch()
  const { darkMode } = useContext(ThemeContext)
  const { searchResult } = useAppSelector((state) => state.stock)

  const [searchInput, setSearchInput] = useState('')

  const clear = () => {
    setSearchInput('')
    dispatch(setSearchResult([]))
  }

  const updateBestMatches = async () => {
    try {
      if (searchInput) {
        const searchResults = await searchSymbol(searchInput)
        const result = searchResults.bestMatches
        dispatch(setSearchResult(result))
      }
    } catch (error) {
      dispatch(setSearchResult([]))
      console.log(error)
    }
  }

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-neutral-200'
      }`}
    >
      <input
        type="text"
        value={searchInput}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? 'bg-gray-900' : null
        }`}
        placeholder="Search stock..."
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            updateBestMatches()
          }
        }}
      />
      {searchInput && (
        <button onClick={clear} className="m-1">
          <IoClose className="w-4 h-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="flex items-center justify-center w-8 h-8 p-2 m-1 transition duration-300 bg-indigo-600 rounded-md hover:ring-2 ring-indigo-400"
      >
        <FaSearch className="w-4 h-4 fill-gray-100" />
      </button>
      {searchInput && searchResult.length > 0 ? (
        <SearchResults />
      ) : null}
    </div>
  )
}

export default Search
