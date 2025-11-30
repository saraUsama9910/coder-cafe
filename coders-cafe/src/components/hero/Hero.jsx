import React from "react";
import BgImage from "../../assets/bg-slate.png";
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
            {/*hero section*/}
            <div className="grid grid-cols-1 md:grid-cols-2">

            </div>
        </div>
    </section>
</main>
    );
       };
export default Hero;