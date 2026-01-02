import React from 'react'
import worldMap from '../../assets/world-map.png'
const WhereToBuy = () => {
  return (
    <div className='container my-36'>

        <div className='grid grid-cols-1
        lg:grid-cols-3
        gap-8
        place-items-center
        '>
{/* form section*/ }
<div>
 
<h1>
    Buy our Products From Anywhere
</h1>
<div className='flex items-center gap-4'> 
   <input type='text' placeholder='Name'
   className='input-style w-full lg:w-[150px]'/> 
   <input type='email' placeholder='Email'
                          className='input-style w-full ' />
</div>
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