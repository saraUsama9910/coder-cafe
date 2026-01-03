import React from 'react'
import { 
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram
} from 'react-icons/fa'
import {FaMapLocationDot} from 'react-icons/fa6'
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
                                {/* footer links section */}
                                {/* social links section */}

            </div>
        </div>
    </div>
  )
}

export default Footer