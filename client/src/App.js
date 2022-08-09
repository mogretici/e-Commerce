import './App.css';
import { Routes, Route } from "react-router-dom";
import Navi from './components/Navi';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import Footer from './components/Footer';
import {
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';


function App() {
  return (
    <>
    <Navi />

      <MDBCard>
      <MDBCardBody>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={ <Signup /> } />
      </Routes>
      </MDBCardBody>
    </MDBCard>
      <Footer />
    </>
  );
}

export default App;
