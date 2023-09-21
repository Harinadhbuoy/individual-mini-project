import axios from "axios";

let base_url = process.env.REACT_APP_API_URL;



async function UserRegistration(Name, email, password, contact_number)
{
   let response = await axios.post(`${base_url}/api/signinup/signin`,{Name:Name,email:email,passwoed:password,contact_number:contact_number})
   console.log(response)

   return response;
}

export default {UserRegistration};