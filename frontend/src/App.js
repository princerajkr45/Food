
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './pages/MyOrder';



function App() {
  return (
    <>
    <CartProvider>

    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/myorder" element={<MyOrder />} />
         
        </Routes>
    </Router>
    </CartProvider>
   </>
    
  );
}

export default App;
