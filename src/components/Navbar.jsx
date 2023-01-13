import React, {useState} from 'react'
import { useGlobalContext } from '../context/Context'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill}  from 'react-icons/bs'
import { TbTruckDelivery} from 'react-icons/tb'
import { MdFavorite, MdHelp} from 'react-icons/md'
import { FaWallet, FaUserFriends} from 'react-icons/fa'


const Navbar = () => {
    const {isActive, handleCartSidebar,itemQuantity, isClicked, deliveryPickup} = useGlobalContext()
    const [nav, setNav] = useState(false)

    const handleMenu = () =>{
        setNav(!nav)
    }
  return (
    <div className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-black/10 p-6 text-white' } fixed w-full max-w-[1640px] mx-auto flex items-center justify-between z-20 py-6 md:px-12`}>
        {/* Left Side */}
        <div className='flex items-center '>
            <div onClick={handleMenu} className=' cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='capitalize text-2xl sm:text-3xl lg:text-4xl px-2'>best <span className='font-bold'>eats</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ' onClick={deliveryPickup}>
                <p className={`${isClicked ? 'bg-black text-white' : 'text-black'}  rounded-full p-2 scroll-smooth transition duration-300`}>Delivery</p>
                <p className={`${isClicked ? 'text-black' : 'bg-black text-white'} rounded-full p-2 `}>Pickup</p>
            </div>
            
        </div>
        {/* Searc input */}
        <div className='flex items-center bg-gray-200 w-[200px] text-black rounded-full px-2 sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent w-full p-2 focus:outline-none ' type='text' placeholder='Search Food' />
        </div>
        {/* cart */}
        <button onClick={handleCartSidebar} className={` ${isActive ? 'bg-black text-white' : 'bg-white text-black' } hidden md:flex items-center py-2 rounded-full`}>
            <BsFillCartFill size={20} className='mr-2'/> Cart
            <div className='bg-orange-600 absolute right-24 top-6 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemQuantity}</div>
        </button>

        {/* Mobile Menu */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300'></div>:''}
       
        {/* Sidedrawer Menu */}
        <div className= {` ${ nav ? 'left-0' : '-left-full'} fixed left-0 top-0 w-[300px] h-screen bg-white z-10  duration-700 `}>
            <AiOutlineClose onClick={handleMenu} size={25} className= 'text-black absolute right-4 top-4 cursor-pointer' />
            <h2 className= 'text-black text-2xl p-4'>Best<span className=' font-bold'> Eats</span></h2>
            <nav>
                <ul className='text-gray-800 p-4'>
                    <li className=' text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/> Orders</li>
                    <li className=' text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/> Favorites</li>
                    <li className=' text-xl py-4 flex'><FaWallet size={25} className='mr-4'/> Wallet</li>
                    <li className=' text-xl py-4 flex'><MdHelp size={25} className='mr-4'/> Help</li>
                    <li className=' text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/> Promotions</li>
                    <li className=' text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4'/> Best Ones</li>
                    <li className=' text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/> Invite Friends</li>
                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Navbar