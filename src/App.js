import './App.css'
import Home from './Component/Home/Home.jsx'
import Signup from './Component/Credencials/Signup'
import Login from './Component/Credencials/Login'
import Devfolio from './Component/Development/DevFolio'
import Developers from './Component/Developers/Developers'
import ArtGallary from './Component/Art/ArtGallary'
import Photos from './Component/PhotoGallary/Photos'
import HomeLogin from './Component/Credencials/HomeLogin';
import Register from './Register';
import Workshopregistration from './Component/Workshop/Workshopregistration';
import Tnslogin from './Component/Game/Tnslogin';
import AnimationForm from './Component/Credencials/AnimatedForm';
import GameHome from './Component/Game/GameHome';
import TwoDimensionGame from './Component/Game/TwoDimensionGame';
import ThreeDimensionGame from './Component/Game/ThreeDimensionGame';
import Gamedetails from './Component/Game/Gamedetails';
import DevelopersSignup from './Component/Credencials/DevelopersSignup';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import WebTempletsupload from './Component/Uploads/WebTempletsupload'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/signup" element={<Signup />}>
          </Route>
          <Route exact path="/login" element={<Login />}>
          </Route>
          <Route exact path="/Devefolio" element={<Devfolio />}>
          </Route>
          <Route exact path="/developers" element={<Developers />}>
          </Route>
          <Route exact path="/developerSignupform" element={<DevelopersSignup />}>
          </Route>
          <Route exact path="/gamehome" element={<GameHome />}>
          </Route>
          <Route exact path="/artgallary" element={<ArtGallary />}>
          </Route>
          <Route exact path="/photos" element={<Photos />}>
          </Route>
          <Route exact path="/homeLogin" element={<HomeLogin />}>
          </Route>
          <Route exact path="/register" element={<Register />}>
          </Route>
          <Route exact path="/workshopregitrstion" element={<Workshopregistration />}>
          </Route>
          <Route exact path="/tnslogin" element={<Tnslogin />}>
          </Route>
          <Route exact path="/animationform" element={<AnimationForm />}>
          </Route>
          <Route exact path="/2dgame" element={<TwoDimensionGame />}>
          </Route>
          <Route exact path="/3dgame" element={<ThreeDimensionGame />}>
          </Route>
          <Route exact path="/detailed-game" element={<Gamedetails />}>
          </Route>
          <Route exact path="/upload" element={<WebTempletsupload />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
