import React from 'react'
import { CoinDetail } from '../components/CoinDetail'
import { HistoryChart } from '../components/HistoryChart'

export const CryptoDetail = () => {
 
  return (
    <div className='wrapper-container mt-10'>
    <HistoryChart />
    <CoinDetail />
    </div>
  )
}
