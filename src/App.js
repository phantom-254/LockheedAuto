import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Index from './components/Index';
import Getproducts from './components/Getproducts';
import Signin from './components/Signin';
import Notfound from './components/Notfound';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
// import Carousel from './components/Carousel';
import Addproducts from './components/Addproducts';
import Payment from './components/Payment';
function App() {
    return (
        <Router>
            <Navbar/>
            {/* carousel */}
            {/* <Carousel/> */}
          
            {/* routes */}
            <Routes>
               
                <Route path="/" element={<Index />} />
                <Route path="/Getproducts" element={<Getproducts />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/*" element={<Notfound />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/Addproducts" element={<Addproducts />} />
                <Route path="/Payment" element={<Payment />} />
            </Routes>
        </Router>
    );
}

export default App;
