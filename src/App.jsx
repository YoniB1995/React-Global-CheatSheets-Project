import "./App.css";
import React from "react";
import SideBar from "./components/sidebar/SideBar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Footer />
    </div>
  );
};

export default App;
