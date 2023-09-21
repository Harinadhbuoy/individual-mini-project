import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;

async function UserLogin(email, password)
{
   let response = await axios.post(`${base_url}/api/signinup/login`,{email:email,passwoed:password})
   console.log(response)

   return response;
}

export default {UserLogin};