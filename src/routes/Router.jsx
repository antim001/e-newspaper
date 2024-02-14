
import Root from './../layouts/Root';
import Login from './../pages/Login/Login';
import Home from './../pages/Home/Home';
import Register from './../pages/Register/Register';
import News from './../pages/News/News';
import PrivateRoute from './Private/PrivateRoute';
import {


createBrowserRouter,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('/news.json')
      },
      {

         path:'/news/:id',
         element:<PrivateRoute><News></News></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
       path:'/register',
       element:<Register></Register>
      }
      
    ]
  },
]);
export default router;