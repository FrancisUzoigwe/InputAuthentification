import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import DisplayScreen from "../Pages/DisplayScreen";
import InputScreen from "../Pages/InputScreen";
import Signin from "../Pages/Auth/Signin";
import Layout1 from "../Components/Common/Layout1";
import LandingPage from "../Pages/LandingPage";
import Signup from "../Pages/Auth/Signup";

export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "auth/signin",
        element: <Signin />,
      },
      {
        path: "auth/signup",
        element: <Signup />,
      },
    ],
  },
]);
