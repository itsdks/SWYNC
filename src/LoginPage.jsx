import React,{useState} from 'react';
import './css/LoginPage.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Logo from "../src/Images/LOGO_Swync.png"
function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const navigate=useNavigate()



  const handleSubmit =async (e) => {
    e.preventDefault();
        console.log(formData);


        // try {

        //   const res=fetch( `${BaseURL}/login`,{
        //     method:"post",
        //     headers:{
        //       "Content-type":"application/json"
        //     },

        //     body:JSON.stringify(formData)

        //   })

      
        // } catch (error) {
          
        // }

        navigate('/')


      //  if(res.ok){

      //     Navigate('/home')
      //  }


  };
  return (
        <div>
         <img src={Logo} alt="SWYNC" className='Login_Logo'/>

        <div className="login-container">
            <div className='Login_form_div'>
      <form onSubmit={handleSubmit} className='login-form' >
        <div>
        <h2 className='heading'>Login</h2>
      <h4 className='heading'>Sign in to continue </h4>
          <label className='label-login'>USER NAME</label>
          <input className='inputfield-login'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          </div>
        <div>
          <label className='label-login'>PASSWORD</label>
          <input className='inputfield-login'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/ForgotPasswordPage" className='link-container '>Forgot Password?</Link>
        <button type="submit" ><Link to="/HomePage" className='link-container-submit '>SIGN IN</Link></button>
        <Link to="/CreateAccountPage" className='link-create-new-account'>Create New Account</Link>
      </form>
      </div>
      </div>
      </div>
  );
}

export default LoginPage;

