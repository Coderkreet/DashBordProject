import React from 'react'
import { MdWatchLater } from "react-icons/md";

const OfferLine = () => {
  return (
    <div className=''>
        
    
    <div className='bg-yellow-200 flex items-center w-[100%] '>
      <div className='flex  h-[3rem] items-center gap-x-5 pl-5'>
        <div className='flex items-center justify-center rounded-lg gap-x-2 bg-yellow-500 h-[2rem] w-[12rem] '>
            <i> <MdWatchLater /> </i>
            <p>One-Time Offer</p>
        </div>

        <p>Your AI Storyboarding Bundle Discount expires in <span className='bg-white text-red-400  p-1 rounded-lg'>  5:01</span></p>

       

        <button className='bg-red-400 h-[2.5rem] w-[7.5rem] rounded-lg'>Claim Discount</button>

      </div>
    </div>
    </div>
  )
}

export default OfferLine
