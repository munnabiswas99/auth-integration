import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/home/Home.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/login/Login.jsx";
import Root from "./components/root/Root.jsx";

export const AuthContext = createContext(null);
const userInfo = {
  email: "munna@gmail.com",
};

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext value={userInfo}>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>
);
