import React from 'react'
import bannerImg from '../../assets/coffee-cover.jpg'
// import AppStoreImg from '../../assets/website/app_store.png'
// import PlayStoreImg from '../../assets/website/play_store.png'
// import{motion} from 'framer-motion'

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

</div>




        </div>
    </div>
  )
}

export default AppBanner