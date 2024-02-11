
import Root from './../layouts/Root';
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
      }
    ]
  },
]);
export default router;