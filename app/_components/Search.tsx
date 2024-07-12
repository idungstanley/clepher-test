'use client'
import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import { searchSymbol } from '../utils/api/stock-api'
import SearchResults from './SearchResults'
import { FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const Search = () => {
  const { darkMode } = useContext(ThemeContext)

  const [searchInput, setSearchInput] = useState('')

  const [bestMatches, setBestMatches] = useState([])

  const clear = () => {
    setSearchInput('')
    setBestMatches([])
  }

  const updateBestMatches = async () => {
    try {
      if (searchInput) {
        const searchResults = await searchSymbol(searchInput)
        const result = searchResults.result
        setBestMatches(result)
      }
    } catch (error) {
      setBestMatches([])
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
          <IoClose className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
      >
        <FaSearch className="h-4 w-4 fill-gray-100" />
      </button>
      {searchInput && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  )
}

export default Search
