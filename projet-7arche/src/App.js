import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from"./components/Navbar";
import Header from './components/Header';



function App() {
  return (

    <div className="container mt-2" style={{ marginTop: 40 }}>
      <Navbar />
      <Home />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/home' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route path='/header'element={<Header/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
