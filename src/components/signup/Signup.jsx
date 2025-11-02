import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold ml-5">Signup Here!</h1>
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
        <p>Already have an accoun? <Link to='/login' className="text-blue-500">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
