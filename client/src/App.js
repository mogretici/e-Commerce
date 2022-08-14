import { Routes, Route, Navigate } from "react-router-dom";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Navi from './components/Navi';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import Profile from './pages/Profile/';
import Footer from './components/Footer';
import {
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import { useAuth } from './context/AuthContext';
import './App.css'

function App() {
  const { loggedIn } = useAuth();
  return (
    <>


    <Navi />

      <MDBCard>
      <MDBCardBody>
      <Routes>
        <Route path="/" element={<Products />} />
        {loggedIn ? (
          <>
          <Route path="profile" element={<Profile />  } />
          <Route path="signup" element={ <Navigate to="/profile" /> }  />
          <Route path="signin" element={ <Navigate to="/profile" /> }  />
          </>
        ):(
          <>
          <Route path="profile" element={ <Navigate to="/" /> }  />
          <Route path="signup" element={<Signup /> } />
          <Route path="signin" element={<Signin />} /> 
          </>
        )}
        <Route path="/*" element={<Navigate to="/" />  } />

      </Routes>
      </MDBCardBody>
    </MDBCard>
      <Footer />

    </>
  );
}

export default App;
