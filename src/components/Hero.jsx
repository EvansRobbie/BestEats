import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640] mx-auto p-4 md:px-10 '>
        <div className='max-h-[500px] relative overflow-hidden rounded-md '>
            {/* Overlay */} 
            <div className='absolute  w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col items-start justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-600'>Food</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Hero