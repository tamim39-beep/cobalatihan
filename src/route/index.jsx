import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/404notfound";

export default function Route() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "*", element: <NotFound /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);

  return <RouterProvider router={router} />;
}
