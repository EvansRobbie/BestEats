import React, {createContext, useState, useEffect, useContext} from 'react'
import toast from 'react-hot-toast'


const GlobalContext = createContext()
const GlobalContextProvider = ({children}) => {
    // cart SideBAr open or closed
    const [isOpen, setisOpen] = useState(false)
    // scroll state
    const [isActive, setIsActive] = useState(false)
    // cart state 
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
    // Update item Quantity
    const [itemQuantity, setItemQuantity] = useState(0)
    // Total price state
    const [total, setTotal] = useState(0)
    // deliverly and pickup state
    const [isClicked, setIsClicked] = useState(false)

    // add items to cart NB: food ids inherited from the Food Component passed to the addToCArt
    const addToCart = (food, id) =>{
        // console.log(food)
        const newItem = {...food, quantity:1}

        // check if item already in cart
        const cartItem = cart.find((item) => item.id === id)
       
        if (cartItem){
             // if item already exist in cart increase quantity
             const newCart = [...cart].map((item) =>{
                if (item.id ===id){
                    return {...item, quantity:cartItem.quantity+1}
                }else{
                    return item
                }
             })
             setCart(newCart)
             toast.success('Item QTY Increased')
             
        }else{
            const newCart = [...cart, newItem]
            setCart(newCart)
            toast.success(`${food.name} Added To Cart`)
        }
        
        // console.log(food.name)
    }
   const removeFromCart = (id) =>{
        const newCart = cart.filter((item) => item.id !== id)
        // console.log(newCart)
        setCart(newCart)
   }

    // increase quantity
    const increaseQuantity = (id) =>{
        const cartItem = cart.find((item) => item.id === id)
        addToCart(cartItem, id)
        
    }
    // decrease quantity
   const decreaseQuantity = (id) => {
        const cartItem = cart.find((item) => item.id === id)
        if (cartItem){
            const newCart = cart.map((item) =>{
                if (item.id === id){
                    return {...item, quantity:cartItem.quantity -1}
                }else{
                    return item
                }
            })
            setCart(newCart)
        }
        if (cartItem.quantity < 2){
            removeFromCart(id)
        }
   }
    //    clear all items in cart
    const clearCart = () =>{
        setCart([])
    }
    const handleCartSidebar = () =>{
        setisOpen(!isOpen)
    }
    // handle delivery and pickup event
    const deliveryPickup =() =>{
        setIsClicked(!isClicked)
    }
    // make the navbar change on scroll
    useEffect (() =>{
        window.addEventListener('scroll', () =>{
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })
    // Update items quantity
    useEffect (()=>{
        if(cart){
            const quantity = cart.reduce((accumulator, currentItem) =>{
                return accumulator + currentItem.quantity
            }, 0)
            setItemQuantity(quantity)
        }
    }, [cart])
    // Total price of items
    useEffect(() =>{
        if(cart){
            const total = cart.reduce((accumulator, currentItem) =>{
                return accumulator + currentItem.price * currentItem.quantity
            }, 0)
            setTotal(total)
        }
        
    }, [cart])
    // Store items in Local state
    useEffect(() =>{
        localStorage.setItem('cartItems', JSON.stringify(cart))
    }, [cart])
  return (
    <GlobalContext.Provider value={{
            isOpen, 
            isActive,
            handleCartSidebar,
            cart, addToCart, 
            increaseQuantity,
            decreaseQuantity,
            removeFromCart, 
            clearCart,
            itemQuantity, 
            total ,
            deliveryPickup,
            isClicked
      }}>
        {children}
    </GlobalContext.Provider>
  )
}
 export const useGlobalContext = () =>{
    return useContext(GlobalContext)
 }
export default GlobalContextProvider