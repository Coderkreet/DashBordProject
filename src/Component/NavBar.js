import React from 'react';
import { BsLightningChargeFill } from 'react-icons/bs';
import { FcRefresh } from 'react-icons/fc';
import '../App.css';

const NavBar = () => {
  return (
    <div className='md:w-[96%] w-max mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-center mt-[1.5rem]'>
        <div className='flex gap-x-3 items-center'>
          <h1 className='bg-black text-white h-[3rem] w-[3rem] text-3xl flex justify-center items-center rounded-full'>B</h1>
          <h1 className='text-2xl font-extrabold'>Project Dashboard</h1>
        </div>

        <div className='flex gap-x-3 mt-3 md:mt-0'>
          <form className='max-w-md'>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                </svg>
              </div>
              <input  type='search' id='default-search' className='block text-black w-full p-4 ps-10 h-[2.6rem] text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search my storyboards' required  />
            </div>
          </form>

          <div className='flex h-[2.6rem] w-[9rem] justify-center font-bold items-center bg-blue-100 border-[2px] rounded-lg border-blue-400 gap-x-3 '>
            <i><FcRefresh /></i>
            Quick Start
          </div>

          <h1 className='LogoGreadint border-[2px] border-black text-black h-[3rem] w-[3rem] text-3xl flex justify-center items-center rounded-full'>A</h1>
          <i className='bg-black text-white h-[3rem] w-[3rem] text-3xl flex justify-center items-center rounded-full'>
            <BsLightningChargeFill />
          </i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
