import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import { Home } from './paginas/home/Home';
import { About } from './components/abaut/About';



function App() {
  return (
    <Router>             // Orquestrador - que monta a página que o usuario vai ver.
    <Navbar />
    <Routes>            // Lista de rotas da aplicação.
      <Route path='/' element={<Home />} />      // Rotas.
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </Router>
    
  );
}

export default App;
