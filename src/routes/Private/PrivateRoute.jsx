
import { useContext } from 'react';
import { AuthContext } from './../../provider/AuthProvider';
import {Navigate} from 'react-router-dom'

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