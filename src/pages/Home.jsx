 import React from 'react'
import { Market } from '../components/Markets'
import { Trending } from '../components/Trending'
 
 export const Home = () => {
   return (
    <div className='wrapper-container'>
     <Trending />
     <Market />
     </div>
   )
 }
 