import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Index from './components/Index';
import Signin from './components/Signin';
import NotFound from './components/Notfound';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import SuggestionList from './components/SuggestionList';
import SubmitSuggestion from './components/SubmitSuggestion';
import GetProducts from './components/Getproducts';
import AddProduct from './components/Addproduct';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/SubmitSuggestion" element={<SubmitSuggestion/>} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Getproducts" element={<GetProducts/>} />
        <Route path="/Addproduct" element={<AddProduct />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/SuggestionList" element={<SuggestionList />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
