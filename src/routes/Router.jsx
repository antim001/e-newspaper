
import Root from './../layouts/Root';
import Login from './../Login/Login';
import Home from './../pages/Home/Home';
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
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);
export default router;