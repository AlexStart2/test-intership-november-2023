import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
