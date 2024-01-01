import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Testimonials from './pages/Testimonials';
import Timeline from './pages/Timeline';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Testimonials />}/>
        <Route path="/" element={<Timeline />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
