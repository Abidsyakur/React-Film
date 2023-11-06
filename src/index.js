import React from "react";
import ReactDOM from "react-dom";
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

const routes = [
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: dashboardLoader,
  },
  {
    path: "/login",
    element: <Login />,
    loader: loginLoader,
  },
  {
    path: "/pesan",
    element: <Pesan />,
    loader: pesanLoader,
  },
  {
    path: "/tiket",
    element: <Tiket />,
    loader: tiketLoader,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


