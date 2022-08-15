import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";

import About from "./pages/About";
import SingleCockTail from "./pages/SingleCockTail";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="container">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCockTail/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
   
    </main>
   
  );
}

export default App;
