import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Userdetails from './component/Userdetails/Userdetails.jsx';
import Users from './component/Users/Users.jsx';
import Updateprofile from './component/Updateprofile/Updateprofile.jsx';
import Root from './Root/Root.jsx';
import Home from './component/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index:true,
        Component:Users,
      },
 {
         path:'/users/:id',
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component: Userdetails,
      },
      {
        path:'/update/:id',
        loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        Component: Updateprofile,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
   
  </StrictMode>,
)
