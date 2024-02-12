import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../../shared/Navbar/Navbar';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col mb-4">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login Your Account</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='passwoed' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>New Here?please <Link className='text-red-600' to={'/register'}>Register</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;