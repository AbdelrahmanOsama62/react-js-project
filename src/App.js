import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Numbers from './components/numbers';
import Navbar from './components/navbar';
import AboutUs from './components/aboutUs';
import Products from './components/shop';
import SignUp from './components/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,HashRouter} from "react-router-dom";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
function App() {
  return (
    
    <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/react-js-project" element={<Home/>}/>
   <Route path="/home" element={<Home/>}/>
   <Route path="/shop" element={<Products/>}/>
   <Route path="/aboutus" element={<AboutUs/>}/>
   <Route path="/counter" element={<Numbers/>}/>
   <Route path="/signup" element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
  );
  
}

export default App;
