
import { useContext } from 'react';

import {Navigate} from 'react-router-dom'
import { AuthContext } from './../../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext)
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
        
    
};

export default PrivateRoute;