import {useContext} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../../shared/Navbar/Navbar';
import { AuthContext } from './../../provider/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        const photo=form.get('photo');
        const name=form.get('name');
       createUser(email,password)
       .then(result=>{
           console.log(result.user);
       })
       .catch(error=>{
         console.log(error);
       })
    }
    return (
        <div>
            <Navbar></Navbar>
          <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col mb-4">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register Your Account</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
      <form onSubmit={handleRegister}  className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name'placeholder="name" className="input input-bordered" required />
        </div>
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo'placeholder="photo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account?please <Link className='text-red-600' to={'/login'}>Login</Link></p>
      </form>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Register;