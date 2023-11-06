// index.js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Pesan from "./Pesan";
import Tiket from "./Tiket";

const homeLoader = () => import("./Home");
const dashboardLoader = () => import("./Dashboard");
const loginLoader = () => import("./Login");
const pesanLoader = () => import("./Pesan");
const tiketLoader = () => import("./Tiket");



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
  {
    path: "pesan",
    element: <Pesan />,
    loader: pesanLoader,
  },
  {
    path:"tiket",
    element: <Tiket />,
    loader: tiketLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
