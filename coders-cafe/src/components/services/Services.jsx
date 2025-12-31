import React from 'react'
import{motion} from "framer-motion"
const Services = () => {
  return (
    <div className="container my-16
    space-y-4">
        {/* header section  */}
<div className='text-center max-w-lg mx-auto
space-y-2'>
<motion.h1 
initial={{opacity:0,y:100}}
whileInView={{opacity:1,y:0}}
transition={{
    type:"spring",
    stiffness:150,
    damping:10,
    delay:0.2
}}
className='text-3xl font-bold text-Gray-600/200'>
    Fresh and <span className='text-yellow-500'>
       Tasty Coffees
    </span>
</motion.h1>
<motion.p 

initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{
    type: "spring",
    stiffness: 150,
    damping: 10,
    delay: 0.2
}}

className='text-sm opacity-50'>
Lorem,ipsum dolor sit amet
consectetur adipisicing elit.
Eos 
reprehenderit eum ducimus,
distinctio cum eaque totam
voluptatem ex
dolorem fuga.
</motion.p>

</div>



          {/* card section  */}



    </div>
  )
}

export default Services