import React from 'react'

const Newstoryboard = ({setStoryBord}) => {

const Handleclose= () =>{
    setStoryBord(false);

}

  return (
    <div>
          <div class="modal-overlay"></div>
    <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white w-[30rem] p-6 rounded-lg shadow-lg relative">
          
           <div className='flex justify-between'> 
            <h1 className='text-2xl mb-5 font-bold'>
            New Storyboard
            </h1>
           <button onClick={Handleclose}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
           </div>


            {/* <!-- Form inputs --> */}
            <div class="mb-4">
                <div className='flex justify-between items-center pb-3'>
                <label for="storyboard-name" class="block text-gray-700 font-semibold">Storyboard Name</label>
                </div>
                <input type="text" id="storyboard-name" placeholder="e.g. Default Project Storyboard" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"/>
            </div>
            <div class="mb-4">
                <label for="frame-size" class="block text-gray-700 font-semibold mb-2">Frame Size</label>
                <select id="frame-size" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                    <option value="landscape">Landscape (16:9)</option>
                    {/* <!-- Add other frame size options here --> */}
                </select>
            </div>
            {/* <!-- AI Assistant toggle --> */}
            <div className='flex justify-between'>
                
            
            <div class="mb-4 flex items-center">
                <span class="text-gray-700 font-semibold mr-2">AI Assistant</span>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>
            {/* <!-- Create button --> */}
            <button class="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Create Storyboard</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Newstoryboard
