import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosAddCircleOutline } from 'react-icons/io';

import ProjectImg from './assets/Screenshot 2024-04-07 170728.png';
import Newstoryboard from './Newstoryboard';

const HeroSection = () => {
  const [StoryBord, setStoryBord] = useState(false);

  function HandleStoryBord() {
    setStoryBord(true);
  }

  return (
    <div className=''>
      {/* Handle Storyboard */}
      {StoryBord && <Newstoryboard setStoryBord={setStoryBord} />}

      <div className='bg-[#f5f6f0]'>
        <div className='flex flex-col md:w-[96%] w-fit justify-center mx-auto  mb-7'>
          <div className='flex justify-between pt-[4rem]'>
            <div className='flex gap-x-3 items-center'>
              <h1 className='LogoGreadint border-[2px] border-black text-black h-[3rem] w-[3rem] text-3xl flex justify-center items-center rounded-full'>A</h1>
              <p>Adam Cooper Team</p>
            </div>
            <div>
              <button className='bg-black text-white h-[2.5rem] md:w-[7.5rem] rounded-lg'>New Project</button>
            </div>
          </div>

          {/* Body */}
          <div className='w-11/12 flex flex-col bg-white mx-auto px-7 mt-9 mb-9 pb-5 rounded-md'>
            <div className='flex justify-between mb-5'>
              <div className='flex items-center gap-x-4'>
                <i className='text-2xl'>
                  <FaRegFolderClosed />
                </i>
                <div>
                  <p className='text-2xl'>Default Project</p>
                  <p className='text-gray-400'>1 storyboard</p>
                </div>
              </div>
              <div className='flex text-2xl gap-x-5 justify-center items-center'>
                <BsThreeDotsVertical />
                <IoIosArrowDown />
              </div>
            </div>

            <div className='flex flex-wrap justify-center md:justify-start items-center gap-x-6'>
              <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700'>
                <a href='#'>
                  <img className='rounded-t-lg' src={ProjectImg} alt='' />
                </a>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2  font-bold tracking-tight  dark:text-black'>Al Character Demo Storyboard</h5>
                  </a>
                  <p className='mb-3 font-normal  dark:text-gray-400'>Updated 19 Mar 24</p>
                </div>
              </div>
              <div className='max-w-sm bg-[#f5f6f0] w-[25rem] md:w-auto h-[20rem] flex justify-center items-center border-gray-200 rounded-lg shadow dark:border-gray-700'>
                <i className='text-[6rem] text-gray-400 cursor-pointer mt-[3rem]' onClick={HandleStoryBord}>
                  <IoIosAddCircleOutline />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
