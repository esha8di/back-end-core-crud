import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Userdetails from "./component/Userdetails/Userdetails.jsx";
import Users from "./component/Users/Users.jsx";
import Updateprofile from "./component/Updateprofile/Updateprofile.jsx";
import Root from "./Root/Root.jsx";
import Home from "./component/Home/Home.jsx";
import Authprovider from "./context/Authprovider.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Productdetails from "./component/Home/Productdetails.jsx";
import Mybids from "./component/Mybids/Mybids.jsx";
import Productbids from "./component/Productbids/Productbids.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
        Component: Userdetails,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
        Component: Updateprofile,
      },
      {

        path:'/productDescription/:id',
        loader: ({params}) =>fetch(`http://localhost:3000/products/${params.id}`),
        Component:Productdetails,


      },
      {
        path:"/productbids/:id",
        loader:({params})=>fetch(`http://localhost:3000/productbids/${params.id}`),
        Component:Productbids,

      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/users",
        Component: Users,
      },
      {
        path: "/mybiddings",
        Component: Mybids,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
