import './App.css';
import Home from './Component/Home/Home.jsx'
import Signup from './Component/Credencials/Signup'
import Login from './Component/Credencials/Login'
import Devfolio from './Component/Development/DevFolio'
import Developers from './Component/Developers/Developers'
import Photos from './Component/PhotoGallary/Photos'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>              
          <Route exact path="/signup" element={<Signup/>}>
          </Route>
          <Route exact path="/login" element={<Login/>}>
          </Route>
          <Route exact path="/Devefolio" element={<Devfolio/>}>
          </Route>
          <Route exact path="/developers" element={<Developers/>}>
          </Route>
          <Route exact path="/photos" element={<Photos/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
