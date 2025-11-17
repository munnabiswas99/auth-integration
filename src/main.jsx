import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/home/Home.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/login/Login.jsx";
import Root from "./components/root/Root.jsx";
import AuthProvider from "./contents/AuthProvider.jsx";
import Orders from "./components/orders/Orders.jsx";
import PrivateRoutes from "./components/routes/PrivateRoutes.jsx";
import Profile from "./components/profile/Profile.jsx";

// export const AuthContext = createContext(null);
// const userInfo = {
//   email: "munna@gmail.com",
// };

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/signup",
        Component: Signup,
      },

      {
        path: "/login",
        Component: Login,
      },

      {
        path: '/orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },

      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
