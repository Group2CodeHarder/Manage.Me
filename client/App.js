import React from "react";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Navbar />
        <Routes />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
