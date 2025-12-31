import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import {motion, scale} from 'framer-motion';
console.log(BgImage);
const bgImage={
    backgroundImage:`url(${BgImage})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
}
const Hero = () => {
    return (
<main style={bgImage}>
    <section className="min-h-[800px] w-full">
        <div className="container">
            {/*navbar section*/}
<Navbar/>                
            {/*hero section*/}
            <div className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 place-items-center
            min-h-[800px]">
{/*text content section */}
    <div className="text-orange-200/100 mt-[100px]"> 
   < motion.h1 
   initial={{opacity: 0,y: -100}} 
   animate={{opacity: 1,y: 0}}
   transition={{
    type: 'spring',
    stiffness: 100,
    damping: 10,
    delay: 1,
   }}
   className="text-7xl font-bold leading-tight ml-14
   md:mt-0 p-4 space-y-28">
   Black Tumbler
   </motion.h1>
   <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 1.2,
    }}
   
   className="relative mt-10"> 
    <div className="relative z-10 space-y-4  ml-14">
       <h1 className="text-2xl">
        Black Lifestyle
        </h1> 
        <h1 className="text-sm opacity-55 leading-loose">
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.
             Delectus aspernatur, 
             cumque eos neque dolorem architecto 
             deserunt quis voluptatibus 
             in quisquam quia ducimus

        </h1>
    </div>
    <div className="absolute -top-6 left-10 w-[250px] h-[180px]
    bg-gray-700/25 ">


    </div>
   </motion.div>
</div>
{/*hero Image section*/}
<div  className="relative">
    <motion.img 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1,scale: 1 }}
        transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: .4,
        }}

    
    src={BlackCoffee} alt="" className="relative z-40 h-[400px] md:h-[700px] img-shadow"/>
{/* orange circle ring */}
                            {/* orange circle ring */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 1.2,
                                }}
                                className="h-[180px] w-[180px] absolute top-24 -right-16 
  border-orange-300/90 rounded-full z-20 border-[20px]"
                            />

                            <div
                                className="
    absolute
    top-10
    right-0
    md:right-20
    lg:right-40
    xl:right-64
    z-[1]
    pointer-events-none
    select-none
  "
                            >
                                <h1
                                    className="
      text-[24px]
      md:text-[32px]
      lg:text-[40px]
      scale-150
      font-bold
      text-black/20
      leading-none
    "
                                >
                                    Black Tumbler
                                </h1>
                            </div>


</div>


{/*third div section */}
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: 1.2,
                            }}

                        
                        className="text-orange-200/100 mt-[100px]">
                            < h1 className="opacity-0 text-7xl font-bold leading-tight ml-14
   md:mt-0 p-4 space-y-28">
                                Black Tumbler
                            </h1>
                            <div className="relative mt-10">
                                <div className="relative z-10 space-y-4  ml-14">
                                    <h1 className="text-2xl">
                                        Black Lifestyle
                                    </h1>
                                    <h1 className="text-sm opacity-55 leading-loose">
                                        Lorem ipsum dolor sit,
                                        amet consectetur adipisicing elit.
                                        Delectus aspernatur,
                                        cumque eos neque dolorem architecto
                                        deserunt quis voluptatibus
                                        in quisquam quia ducimus

                                    </h1>
                                </div>
                                <div className="absolute -top-6 right-10 w-[250px] h-[180px]
    bg-black/50">


                                </div>
                            </div>
                        </motion.div>
<div></div>

            </div>
        </div>
    </section>
</main>
    );
       };
export default Hero;