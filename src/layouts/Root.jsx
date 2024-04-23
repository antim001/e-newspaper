import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
      <Outlet></Outlet>
      <Toaster/>
        </div>
    );
};

export default Root;