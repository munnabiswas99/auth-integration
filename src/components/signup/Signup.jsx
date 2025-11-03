import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../../firebase.init";

const Signup = () => {

    const handleSignup = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            const errorMsg = error.message;
            console.log(errorMsg);
        })
    }

  return (
    <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold ml-5">Signup Here!</h1>
      <div className="card-body">
        <form onSubmit={handleSignup} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
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
