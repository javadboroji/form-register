import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Logo from './images/logo.png'
import RegisterImage from './images/Fingerprint-amico.png'
import LooginImage from './images/Fingerprint-pana.png'
import UserImage from './images/user.png'
import Login from './components/Login';
import AdminPanle from './components/AdminPanle'
const register={ alt:' logo' , src:Logo ,altImage:' image' ,srcImage:RegisterImage}
const login={ alt:' logo' , src:Logo,altImage:' image',srcImageLogin:LooginImage}
function App() {
  //set item local storage
  //crate table users
  //btn show table users
  return (
    <div className='App'>
      <BrowserRouter>
      
      <div className='forms-box'>
      <Routes>
        <Route path="/" element={<Register  data={register} />} />
        <Route path="/login" element={<Login data={login} />} />
        <Route path="/dashbord" element={<AdminPanle data={UserImage} />} />
        </Routes>
      </div>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
