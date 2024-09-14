
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
         
        </Routes>
    </Router>
   </>
    
  );
}

export default App;
