import React from "react";
import Navbar from "./components/Navbar";
import Navroutes from "./routes/Navroutes";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Navroutes />
      <Footer />
    </div>
  );
};

export default App;
