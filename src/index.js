// index.js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./login";

const homeLoader = () => import("./Home");
const dashboardLoader = () => import("./Dashboard");
const loginLoader = () => import("./login");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    loader: dashboardLoader,
  },
  {
    path: "login",
    element: <Login />,
    loader: loginLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
