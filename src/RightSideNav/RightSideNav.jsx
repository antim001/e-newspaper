import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
        <div className='p-4 space-y-2 mb-6'>
           <h2 className='text-bold'>Login With</h2> 
           <button className="btn btn-outline w-full">
          <FcGoogle></FcGoogle>
         google
</button>
<button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
        github
</button>
        </div>
         <div className='p-4 space-y-2 mb-6'>
         <h2 className='text-bold'>Find us on</h2> 
         
      <a className='flex text-lg items-center border rounded-t-lg p-4 hover:bg-slate-400' href="">
      <FaFacebookF className='mr-2'></FaFacebookF>
      <span>Facebook</span>
      </a>
      <a className='flex text-lg items-center border-x p-4 hover:bg-slate-400' href="">
      <FaTwitter className='mr-2'></FaTwitter>
       <span>Twitter</span>
      </a>
      <a className='flex text-lg items-center border rounded-b-lg p-4 hover:bg-slate-400' href="">
      <FaInstagramSquare className='mr-2'></FaInstagramSquare>
       <span>Instagram</span>
      </a>


      </div>
      {/* q zone */}
      <div className='p-4 space-y-2 mb-6'>
           <h2 className='text-bold'>Q Zone</h2> 
          
        </div>
      </div> 
    );
};

export default RightSideNav;