import React from 'react'
import worldMap from '../../assets/world-map.png'
import '../../index.css'
const WhereToBuy = () => {
  return (
    <div className='container my-36'>

        <div className='grid grid-cols-1
        lg:grid-cols-3
        gap-8
        place-items-center
        '>
{/* form section*/ }
<div className='space-y-8'>
 
<h1 className='
text-4xl font-bold
text-darkGray
font-serif'>
    Buy our Products From Anywhere
</h1>
<div className='flex items-center gap-4'> 
   <input type='text' placeholder='Name'
              className='px-4 py-2 border-[1px] border-gray-400/100 rounded-md w-full lg:w-[150px]'/> 
   <input type='email' placeholder='Email'
              className='px-4 py-2 border-[1px] border-gray-400/100 rounded-md w-full ' />
</div>
          <div className='flex items-center gap-4'>
            <input type='text' placeholder='Country'
              className='px-4 py-2 border-[1px] border-gray-400/100 rounded-md w-full lg:w-[150px]' />
            <input type='email' placeholder='Zipcode'
              className='px-4 py-2 border-[1px] border-gray-400/100 rounded-md w-full lg"w-[150px]' />
          </div>
          <button className='
        bg-orange-300/100 
        text-white 
        px-4 py-2 
        rounded-md 
        hover:bg-orange-400/100 
        duration-200
      
          '>
            Order Now
          </button>
            </div>
{/* world map section */}
            <div className='col-span-2'>
<img src={worldMap} alt=''

className='input-style w-full'
/>
            </div>
        </div>
    </div>
  )
}

export default WhereToBuy