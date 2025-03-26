import { useState } from 'react'



function Navbar({cartVisibility, cartItems, buttonName, name, cart}) {

    const handleClick = () => {
        cartVisibility();
        buttonName();
    }

    

    return (
        <div>
            <h1 className='font-bold text-center text-2xl text-green-600 bg-blue-200 mt-2 py-2 italic md:m-5 md:mb-0 md:text-4xl md:font-bold'>🛍 Exclusive Shoppings!! 🛒</h1>
            <button className='bg-orange-300 rounded-md pt-1 ml-1 md:ml-8 pl-2 mt-2 hover:bg-orange-500 pb-1 font-semibold mb-2 text-purple-800 text-md pr-2 md:mt-2 md:mb-1 md:pr-5 md:text-2xl hover:cursor-pointer' onClick={handleClick}>{name} {!cart && <span>{cartItems.length}</span>}</button>
          
        </div>
    )
}

export default Navbar 