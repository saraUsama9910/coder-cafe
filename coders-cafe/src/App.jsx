import React from "react";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import WhereToBuy from "./components/whereToBuy/WhereToBuy";
const App = () => {
  return <div >
    <nav className="overflow-x-hidden">
      <Hero/>
<Services/>
<WhereToBuy/>
    </nav>
  </div>;
};
export default App;