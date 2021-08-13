import "./App.css";
import React from "react";
import SideBar from "./components/features/sidebar/SideBar";
import Footer from "./components/features/footer/Footer";
import Container from "./components/pages/container/Container";
import Header from "./components/features/header/Header";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="align-main">
          <SideBar />
          <Container />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
