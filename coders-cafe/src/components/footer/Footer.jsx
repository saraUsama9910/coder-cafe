import React from 'react'
import { 
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram
} from 'react-icons/fa'
import {FaMapLocation, FaMapLocationDot} from 'react-icons/fa6'
import CreditCards from '../../assets/website/credit-cards.webp'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r 
                    from-orange-300/100 to-orange-500/100
                        pt-12
                        pb-8
                        text-white'>
            <div className='container'>
                    <div className='grid grid-cols-1 
                                    sd:grid-cols-2 
                                    md:grid-cols-3
                                    gap-8 '>

                                {/* company details section */}
                                <motion.div 
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true , amount: 0.5 }}
                                transition={{ duration: 0.6, delay: 0.2 }}  

                                
                                
                                className='space-y-6'>
                                    <h1 className='text-3xl
                                                    font-bold
                                                    pl-8
                                                    uppercase'>
                                        Coders Cafe
                                    </h1>
                                    <p className='
                                    pl-8
                                                    text-sm
                                                    max-w-[300px]
                                                    '>
                                        Lorem ipsum dolor sit amet 
                                        consectetur adipisicing elit. 
                                        Quisquam, quod.
                                        ratione quidem libero,praesentium ab atque?
                                        Quidem maxime,
                                        numquam dolores.
                                    </p>
                                    <div>
                                        <p className='flex items-center gap-2
                                        pl-8'>
                                            <FaPhone />
                                           
                                               +1 (123) 456-7890
                                        </p>
                          <p className='pl-8 flex items-center gap-2'>
                                            {" "}
                                            <FaMapLocation/>
                                                    Noida,Uttar Pradesh                                        
                                        </p>
                                    </div>
                                </motion.div>
                                {/* footer links section */}
                                <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, delay: 0.4 }}  

                                
                                className='space-y-6'>
                                    <h1 className='text-3xl
                                                    font-bold
                                                    '>
                                        Quick Links
                                    </h1>
                                    <div className='
                                    grid grid-cols-2
                                    gap-3'>
                                    {/* first colunm section */}
                                    <div>
                                        <ul className='
                                                        space-y-2
                                                        text-sm
                                                        '>
                                            <li>Home</li>
                                            <li>About Us</li>
                                            <li>Services</li>
                                            <li>Products</li>
                                            <li>Contact Us</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </div>
                                    {/* second colunm section */}
                          <div>
                              <ul className='
                                                        space-y-2
                                                        text-sm
                                                        '>
                                  <li>Home</li>
                                  <li>About Us</li>
                                  <li>Services</li>
                                  <li>Products</li>
                                  <li>Contact Us</li>
                                  <li>Privacy Policy</li>
                              </ul>
                          </div>
                                    </div>

                                </motion.div>
                                {/* social links section */}
                                <motion.div
                                
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, delay: 0.6 }}  

                                
                                className='space-y-6'>
                                    <h1 className='text-3xl
                                                    font-bold
                                                    '>
                                        Follow Us

                                    </h1>
                                    <div className='flex 
                                                    items-center 
                                                    gap-3
                                                    '>
                                        <FaFacebook className='
                                                        text-3xl
                                                        hover:scale-105
                                                        duration-300
                                                        '/>
                                        <FaInstagram className='
                                                        text-3xl
                                                        hover:scale-105
                                                        duration-300
                                                        '/>
                                        <FaGoogle className='
                                                        text-3xl
                                                        hover:scale-105
                                                        duration-300
                                                        '/>
                                        <FaTelegram className='
                                                        text-3xl
                                                        hover:scale-105
                                                        duration-300
                                                        '/>
                                    </div>
                                    <div>
                                        <h1 className='text-xl
                                                    font-semibold
                                                    '>
                                            Payment Methods

                                        </h1>
                                        <img src={CreditCards} alt="credit-cards" 
                                        className='
                                                        w-[80%]
                                                        '/>
                                    </div>
                                    <div>
                                    </div>

                                </motion.div>

            </div>
            {/*copyright section */}
            <p className='
            text-white
            pt-8
            mt-8
            border-t-2
             text-center
                        
                        '> 
                © Copyright &copy; 2026 Eng Sara. All 
                rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer