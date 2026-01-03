import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../navbar/Navbar";
import {motion, scale} from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
console.log(BgImage);
const bgImage={
    backgroundImage:`url(${BgImage})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
}
const Hero = () => {
    const [sidebar, setSidebar] = React.useState(false);
    return (
<main style={bgImage}>
    <section className=" relative min-h-[800px] w-full">
        <div className="container">
            {/*navbar section*/}
<Navbar
 sidebar={sidebar} 
 setSidebar={setSidebar} 
 />                
            {/*hero section*/}
            <div className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 place-items-center
            min-h-[800px]">
{/*text content section */}
    <div className="text-orange-200/100 mt-[100px]"> 
   < motion.h1 
   initial={{opacity: 0,y: -100}} 
   whileInView={{opacity: 1,y: 0}}
   transition={{
    type: 'spring',
    stiffness: 100,
    damping: 10,
    delay: 0.1,
   }}
   className="text-7xl font-bold leading-tight ml-14
   md:mt-0 p-4 space-y-28">
   Black Tumbler
   </motion.h1>
   <motion.div 
    initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
    transition={{
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.2,
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
                                whileInView={{ opacity: 1,scale: 1 }}
        transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.2,
        }}

    
    src={BlackCoffee} alt="" className="relative z-40 h-[400px] md:h-[700px] img-shadow"/>
{/* orange circle ring */}
                            {/* orange circle ring */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.2,
                                }}
                                className="h-[180px] w-[180px] absolute top-24 -right-16 
  border-orange-300/90 rounded-full z-20 border-[20px]"
                            />

<motion.div 
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: .3,
                                }}


className="absolute top-20 left-[200px] z-[1]">
    <h1 className="text-[100px] scale-150  font-bold text-black/20 leading-none">
        Black Tumbler
    </h1>
</motion.div>


</div>


{/*third div section */}
<div className="hidden lg:flex">
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: 0.2,
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
        </div>

{/*sidebar menu section*/}
{sidebar && (

                    <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3,
                    }}>
                        
                        <div className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-orange-300/100
to-orange-500/100 backdrop-blur-sm z-50">


                            <div className="w-full h-full
   flex justify-center items-center">
                                <div className="
flex flex-col justify-center items-center
    gap-6 text-white ">
                                    {/*line */}

                                    <div className="w-[1px] h-[70px] bg-white">

                                    </div>
                                    {/*circle social icons*/}
                                    <div className="inline-block p-2 rounded-full 
border border-white cursor-pointer">
                                        <FaFacebookF className="text-2xl" />
                                    </div>
                                    <div className="inline-block p-2 rounded-full 
border border-white cursor-pointer">
                                        <FaTwitter className="text-2xl" />
                                    </div>
                                    <div className="inline-block p-2 rounded-full 
border border-white cursor-pointer">
                                        <FaInstagram className="text-2xl" />
                                    </div>
                                    {/*line */}

                                    <div className="w-[1px] h-[70px] bg-white">

                                    </div>
                                </div>
                            </div>

                        </div>


                    </motion.div>

)}

    </section>
</main>
    );
       };
export default Hero;