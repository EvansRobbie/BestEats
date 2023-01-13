import React, { useState } from 'react'
import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { useGlobalContext } from '../context/Context'
import { FoodData } from '../data/FoodData'



const Food = () => {
 const [foods, setFoods] =useState(FoodData)
 const {addToCart} = useGlobalContext()

//  Filter type burgers..
const filterType = (category) =>{
    setFoods(
        FoodData.filter((item)=> item.category === category)
    )
}
// Filter By price
const filterPrice = (price) =>{
    setFoods(
        FoodData.filter((item) => item.price === price)
    )
}
  return (
    <div className='max-w-[1640px] mx-auto px-10 py-10'>
        <h1 className='text-orange-600 font-bold text-4xl text-center capitalize pb-4'>Top rated menu items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
             {/* Filter type */}
             <div>
                <p className='font-bold text-gray-700'>Filter type</p>
                <div className='flex justify-between flex-wrap gap-y-2 md:gap-y-0 '>
                    <button onClick={()=>setFoods(FoodData)} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=>filterType('burger')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=>filterType('pizza')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType('salad')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=>filterType('chicken')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
             </div>
             {/* Filter Price */}
             <div>
                <p className='font-bold text-gray-700'>Filter</p>
                <div className='flex justify-between max-w-[390px] w-full gap-x-2 md:gap-y-0'>
                    <button onClick={()=>filterPrice('50')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$ 50</button>
                    <button onClick={()=>filterPrice('100')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$ 100</button>
                    <button onClick={()=>filterPrice('150')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$ 150</button>
                    <button onClick={()=>filterPrice('200')} className='lg:m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$ 200</button>
                </div>
             </div>
             
        </div>
       
        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
            {/* Display Products/Food */}
            {foods.map((food) =>{
                const {id, name, image, price} = food
                return (
                    <div key={id} className='relative group border shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer'>
                        <img className='w-full h-[200px] object-cover rounded-t-lg ' src={image} alt={name} />

                        <div className='flex justify-between  px-2 py-4'>
                            <p className='font-bold'>{name}</p>
                            <p>
                                <span className=' bg-orange-500 text-white rounded-full p-1'>${price}</span>
                            </p>
                        </div>
                        
                        <div>
                            {/* buttons */}
                            <div className=' absolute top-6 p-2 flex flex-col justify-center items-center  opacity-0 group-hover:opacity-100
                                transition-all duration-300 -right-11 group-hover:right-5 '>
                                    <button className=' border-none flex flex-col gap-y-2'>
                                        <div onClick={()=>addToCart(food, id)} className='flex justify-center items-center rounded-full text-white w-12 h-12 bg-orange-600'>
                                            <BsPlus size={25}/>
                                        </div>
                                        <div className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl rounded-full'>
                                            <BsEyeFill />
                                        </div>
                                    </button>
                                </div>
                                </div>
                    </div>
                )
            })}
        </div>
       
    </div>
  )
}

export default Food