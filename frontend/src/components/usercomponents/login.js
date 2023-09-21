import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/login.css";
import logo from "../../assets/images/wallpaper (1).jpg";
import signin_service from '../../services/signinup/signin_service';
import signup_service from '../../services/signinup/signup_service';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const Login = () => 
{

  //Login hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [Name, setName] = useState('');
  const [e_mail, setE_mail] = useState('');
  const [pass_word, setPass_word] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [contact_number, setContact_number] = useState('');

  const handleLoginChange = async (e) => {
    e.preventDefault();
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    signin_service.UserLogin(email, password).then(response => {
      if (response.statusText === "ok") {
        toast.success('Login success', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/userdashboard')
      }
      if (response.status === 400) {
        toast.warning("Invalid Username or Password", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        })
      }
    })
  }




  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (pass_word.length > 6) {
      if (pass_word !== confirmpassword) {
        setPasswordsMatch(false);
      } else {
        
        signup_service.UserRegistration(Name,e_mail, pass_word,contact_number).then((res) => {
          if (res.status === 201) {
            toast.success('Registered success', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            navigate('/userdashboard');

          }
          else if (res.status === 200) {

            toast.warning(res.data, {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })

          }

        }).catch((error) => {

          console.error("Fetch error:", error);

          toast.error("An error occurred during registration.");
        });

      }
    }
    else {
      toast.warning("Email should be greater than 6 characters", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }


return (
  <>
    <div class="container">
      <input type="checkbox" id="flip"></input>
      <div class="cover">
        <div class="front">
          <img src={logo} alt="" />
          <div class="text">
            <span class="text-1">Live Travel Explore</span>
            <span class="text-2">Let's get connected</span>
          </div>
        </div>
      </div>
      <div class="forms">
        <div class="form-content">
          <div class="login-form">
            <div class="title">Login</div>
            <form onSubmit={handleLoginChange}>
              <div class="input-boxes">
                <div class="input-box">
                  <input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div class="input-box">
                  <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div class="text"><a href="#">Forgot password?</a></div>
                <div class="button input-box">
                  <input type="submit" value="Sumbit" onClick={handleSubmit}></input>
                </div>
                <div class="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
              </div>
            </form>
          </div>



          <div class="signup-form">
            <div class="title">Signup</div>
            <form >
              <div class="input-boxes">
                <div class="input-box">
                  <i class="fas fa-user"></i>
                  <input type="text" value={Name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required></input>
                </div>
                <div class="input-box">
                  <i class="fas fa-envelope"></i>
                  <input type="text" value={e_mail} placeholder="Enter your email" onChange={(e) => setE_mail(e.target.value)} required></input>
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input type="password" value={pass_word} placeholder="Enter your password" onChange={(e) => setPass_word(e.target.value)} required></input>
                </div>
                <div class="input-box">
                  <input type="password" className="input-field" placeholder=" confirm Password" value={confirmpassword} onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setPasswordsMatch(e.target.value === pass_word);
                  }} required />
                  {!passwordsMatch && <p style={{ color: 'red' }}>passwords did'nt matched</p>}
                </div>
                <div class="input-box">
                  <input type="text" value={contact_number} placeholder="contact number" onChange={(e) => setContact_number(e.target.value)} required></input>
                </div>
                <div class="button input-box">
                  <input type="submit" value="Sumbit" onSubmit={handleRegisterSubmit}></input>
                </div>
                <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
export default Login;

