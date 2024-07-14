import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import Card from './Card'

export interface DetailsProps {
  Name: string
  Country: string
  Currency: string
  Exchange: string
  MarketCapitalization: number
  Industry: string
  AssetType: string
}

const Details = ({ details }: { details: DetailsProps }) => {
  const { darkMode } = useContext(ThemeContext)
  console.log(details)
  const detailsList: { [K in keyof DetailsProps]: string } = {
    Name: 'Name',
    Country: 'Country',
    Currency: 'Currency',
    Exchange: 'Exchange',
    MarketCapitalization: 'Market Capitalization',
    Industry: 'Industry',
    AssetType: 'Asset Type',
  }

  const convertMillionToBillion = (number: number) => {
    return (number / 1000).toFixed(2)
  }

  return (
    <Card>
      {Object.keys(details).length === 0 ? (
        <ul
          className={`w-full h-full flex flex-col justify-between divide-y-1 ${
            darkMode ? 'divide-gray-800' : null
          }`}
        >
          {Object.keys(detailsList).map((item) => {
            return (
              <li
                key={item}
                className="flex-1 flex justify-between items-center"
              >
                <span>{detailsList[item as keyof DetailsProps]}</span>
                <span className="font-bold">
                  {item === 'marketCapitalization'
                    ? `${convertMillionToBillion(
                        details[item as keyof DetailsProps] as number,
                      )}B`
                    : details[item as keyof DetailsProps]}
                </span>
              </li>
            )
          })}
        </ul>
      ) : (
        <p className="flex items-center justify-center w-full h-full">
          There is no details for this stock, check back later!
        </p>
      )}
    </Card>
  )
}

export default Details
