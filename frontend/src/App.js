import './App.css';
import Login from './components/usercomponents/login';
// import Signup from './components/signup/signup';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Userdashboard from './layouts/userdashboard';
import AdminHomePage from './components/admin_components/adminhome';
import ManageTourPackages from './components/admin_components/adminmanage';
import Admindashboard from './layouts/admindashboard';
import TourForm from './components/admin_components/addtourpackage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login/>} /> 
       <Route path="/userdashboard" Component={Userdashboard}/>
       <Route path="/admindashboard" Component={Admindashboard}/>
       <Route path="/addtourpackage" Component={TourForm}/>
       </Routes>
     </BrowserRouter> 
     {/* <TourForm/>
     {/* <TourForm /> */}
    </div>  
  );
}

export default App;
















/* <BrowserRouter>
       <Routes>
       <Route path="/" element={<Login/>} /> 
       <Route path="/userHomePage" Component={userHomePage}/>
       </Routes>
     </BrowserRouter> */