import React from "react";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import WhereToBuy from "./components/whereToBuy/WhereToBuy";
import AppBanner from "./components/appBanner/AppBanner";
import Footer from "./components/footer/Footer";
const App = () => {
  return <div >
    <nav className="overflow-x-hidden">
      <Hero/>
<Services/>
<WhereToBuy/>
<AppBanner/>
<Footer/>
    </nav>
  </div>;
};
export default App;