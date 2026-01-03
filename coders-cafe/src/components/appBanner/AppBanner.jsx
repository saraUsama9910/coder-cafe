import React from 'react'
import bannerImg from '../../assets/coffee-cover.jpg'
import { FaAppStore } from 'react-icons/fa';
import AppStoreImg from '../../assets/website/app_store.png'
import PlayStoreImg from '../../assets/website/play_store.png'
import{motion} from 'framer-motion'

const BannerStyle={
    backgroundImage:`url(${bannerImg})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:'100%',
    width:'100%',
};


const AppBanner = () => {
  return (
    <div className='container my-14' >

        <div style={BannerStyle}
        className='
        sm:min-h-[400px] 
        sm:flex
        sm:justify-end
        sm:items-center 
        rounded-xl'
        >

      

<div>
<div className='space-y-6
max-w-xl mx-auto'>
  <h1 className='
    text-2xl 
    font-semibold 
    text-center
    sm:text-4xl
    '>
    Download The App
    </h1>  
    <p className='
    text-center
    sm:px-20
    '>
        Lorem ipsum sit amet consectetur sit
        amet consectetur
        adipisicing elit. Officiis{" "}
        </p>
        {/*images link */}
        <div className='flex justify-center
        items-center gap-4'>
            <a
            href='#'
            className='max-w-[150px] sm:max-w-[120px]
            md:max-w-[200px]'
            >
            <img src={AppStoreImg} alt=''/>
            </a>
            <a href='#'
            className='max-w-[150px] sm:max-w-[120px]
            md:max-w-[200px]'>
            <img src={PlayStoreImg} alt='' />

            </a>
        </div>
</div>
</div>




        </div>
    </div>
  )
}

export default AppBanner