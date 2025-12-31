import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";

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
   < h1 className="text-7xl font-bold leading-tight ml-14
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
    <div className="absolute -top-6 left-10 w-[250px] h-[180px]
    bg-gray-700/25 ">


    </div>
   </div>
</div>
{/*hero Image section*/}
<div  className="relative">
    <img src={BlackCoffee} alt="" className="relative z-40 h-[400px] md:h-[700px] img-shadow"/>
{/* orange circle ring */}
<div className="h-[180px] w-[180px] absolute top-24 -right-16 
border-orange-300/90 rounded-full z-10 border-[20px] ">
    
   { /*big text section*/ }
    <div className="absolute -top-20 -left-[200px]
    z-[1]
    ">
     <h1 className="text-[40px] scale-150
      font-bold text-black/20 leading-none
      ">
         Black Tumbler
      </h1>
    </div>
    

</div>
</div>


{/*third div section */}
                        <div className="text-orange-200/100 mt-[100px]">
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
                        </div>
<div></div>

            </div>
        </div>
    </section>
</main>
    );
       };
export default Hero;