import React from 'react';
import { MdWatchLater } from "react-icons/md";

const OfferLine = () => {
  return (
    <div className='bg-yellow-200 flex items-center md:w-full w-fit'>
      <div className='flex h-[3rem] items-center gap-x-5 pl-5'>
        <div className='flex items-center justify-center text-[0.8rem] rounded-lg gap-x-2 bg-yellow-500 h-[2rem] w-auto md:min-w-[7.5rem] md:w-auto'>
          <i><MdWatchLater /></i>
          <p>One-Time Offer</p>
        </div>

        <p className='md:ml-5'>
          Your AI Storyboarding Bundle Discount expires in{' '}
          <span className='bg-white text-red-400 p-1 rounded-lg'>5:01</span>
        </p>

        <button className='bg-red-400 text-[0.8rem] h-[2.5rem] w-auto md:min-w-[7.5rem] rounded-lg md:w-auto mt-2 md:mt-0'>
  Claim Discount
</button>

      </div>
    </div>
  );
};

export default OfferLine;
