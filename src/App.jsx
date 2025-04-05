import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  
  return (
    <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
    </div>
  )
}

export default App
