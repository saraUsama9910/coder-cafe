import React from "react";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
const App = () => {
  return <div >
    <nav className="overflow-x-hidden">
      <Hero/>
<Services/>
    </nav>
  </div>;
};
export default App;