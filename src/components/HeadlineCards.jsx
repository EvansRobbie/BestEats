import React from 'react'
import Data from '../data/Data'



const HeadlineCards = () => {
    const cardElement = Data.map((detail) =>{
        const {id, title, descripion, image} = detail
        return(
            <div key = {id} className='rounded-xl overflow-hidden relative hover:scale-105 duration-300'>
                {/*  overlay */}
            <div className='absolute  w-full h-full bg-black/60 rounded-xl text-white hover:bg-transparent top-0 left-0 duration-300'>
                <p className='font-bold text-2xl px-2 pt-4'>{title}</p>
                <p className='px-2'>{descripion}</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-600 hover:text-white duration-300'>Order Now</button>
            </div>
            {/* image */}
            <img className='max-h-[160px] md:max-h-[200px] object-cover w-full  ' src={image} alt="/" />
            </div>
        )
     })

  return (
    <div className=' max-w-[1640px] mx-auto p-4 md:px-10 py-10 grid md:grid-cols-3 gap-6'>
       {cardElement}
    </div>
  )
}

export default HeadlineCards