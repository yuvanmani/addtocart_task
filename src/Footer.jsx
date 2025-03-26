import { useState } from 'react'

function Footer() {
  return (
    <div className='bg-cyan-100 m-2'>
      <p className='text-gray-700 text-center pt-2 md:text-xl'>Already a customer? <span><a href='#' className='underline'>Sign in</a></span></p>
      <div className='text-xs flex mx-2 justify-between my-2 text-gray-600 md:text-lg md:justify-around lg:justify-evenly'>
        <a href='#'>Conditions of Use</a>
        <a href='#'>Privacy Notice</a>
        <a href='#'>Interest-Based Ads</a>
      </div>
      <p className='text-center mb-2 text-gray-500 md:text-lg'>© 1998-2025,  Exclusive Shoppings!!</p>
      <p className='text-center pb-2 text-gray-500 md:text-lg'>All rights reserved.</p>
    </div>
  )
}

export default Footer