import "./App.css";
import React from "react";
import SideBar from "./components/features/sidebar/SideBar";
import Footer from "./components/features/footer/Footer";
import Container from "./components/pages/container/Container";
import Header from "./components/features/header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="align-main">
        <SideBar />
        <Container />
      </div>
      <Footer />
    </div>
  );
};

export default App;
