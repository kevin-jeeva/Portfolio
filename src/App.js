import React, { useState } from "react";
import Navbar from "./navigation/navbar";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./container/Home";
import About from "./container/About";
import Contact from "./container/Contact";

const App = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleSetActive = (active) => {
    setActiveItem(active);
  };

  return (
    <>
      <Navbar active={handleSetActive} current={activeItem} />
      {activeItem === "home" && <Home />}
      {activeItem === "about" && <About />}
      {activeItem === "contact" && <Contact />}
    </>
  );
};

export default App;
