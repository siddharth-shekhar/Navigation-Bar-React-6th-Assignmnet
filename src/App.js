import logo from './logo.svg';
import React  from 'react';
import './App.css';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
//PUSHING

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route path="/Home" element={<Home />} />
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/Services" element={<Services />} />
        {/* <Route path="/Services" component={Services} /> */}
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path="/Contact" component={Contact} /> */}
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/Projects" component={Projects} /> */}
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
