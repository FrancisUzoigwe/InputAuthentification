import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import LandingPage from "../Pages/LandingPage";
import DisplayScreen from "../Pages/DisplayScreen";
import InputScreen from "../Pages/InputScreen";


export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index : true,
                element : <LandingPage/>,
                path :"/",
            },
            {
                element: <DisplayScreen/>,
                path: "display"
            },
            {
                element : <InputScreen/>,
                path : "input"
            }
        ]
    }
])