import React from 'react'
import worldMap from '../../assets/world-map.png'
import '../../index.css'
import{motion} from "framer-motion"
const WhereToBuy = () => {
  return (
    <div className='container my-36'>

        <div className='grid grid-cols-1
        lg:grid-cols-3
        gap-8
        place-items-center
        '>
{/* form section*/ }
<div className='space-y-8 '>
 
<motion.h1
initial={{opacity:0,y:100}}
whileInView={{opacity:1,y:0}}
transition={{
  type: "spring",
  stiffness: 100,
  damping: 10,
  delay:0.2
}}
className='
text-4xl font-bold
text-darkGray
ml-8
font-serif'>
    Buy our Products From Anywhere
</motion.h1>
<motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4

            }}

            className='flex items-center gap-4 ml-8'> 
   <input type='text' placeholder='Name'
              className=' px-4 py-2 border-[1px] border-gray-400/100 rounded-md w-full lg:w-[150px]'/> 
   <input type='email' placeholder='Email'
              className='px-4 py-2 border-[1px] border-gray-400/100 rounded-md w-full ' />
</motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6
            }}
            className='ml-8 flex items-center gap-4'>
            <input type='text' placeholder='Country'
              className='px-4 py-2 border-[1px] border-gray-400/100 rounded-md w-full lg:w-[150px]' />
            <input type='email' placeholder='Zipcode'
              className='px-4 py-2 border-[1px] border-gray-400/100 rounded-md w-full lg:w-[150px]' />
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8
            }}
          
          className='
        bg-orange-400/100 
        text-white 
        px-4 py-2 
        rounded-md 
        hover:bg-orange-300/100 
        duration-200
        w-full
        ml-4

          '>
            Order Now
          </motion.button>
            </div>
{/* world map section */}
            <div className='col-span-2'>

<motion.img 
initial={{opacity:0,scale:0.5}}
whileInView={{opacity:1,scale:1}}
transition={{
  type:"spring",
  stiffness:100,
  damping:10,
  delay:1,
}}

src={worldMap} alt=''

className='input-style w-full'
/>
            </div>
        </div>
    </div>
  )
}

export default WhereToBuy