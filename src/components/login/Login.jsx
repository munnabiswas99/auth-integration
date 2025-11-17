import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contents/AuthContext";

const Login = () => {
  const {signUp} = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUp(email, password)
    .then(result => {
      console.log(result.user);
      navigate('/orders')
    })
    .catch(error => {
      console.log(error.message)
    })
    
  } 

  return (
    <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold ml-5">Login now!</h1>
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Don't have an accoun? <Link to='/signup' className="text-blue-500">Signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
