import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import AboutDev from "../pages/AboutDev";
import AuthenticationPage from "../pages/AuthenticationPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/brands",
                element: <Brands></Brands>
            },
            {
                path: "/myProfile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "/aboutDev",
                element: <AboutDev></AboutDev>
            },
           {
            path: "/authentication",
            element: <AuthenticationPage></AuthenticationPage>,
            children: [
                {
                    path: "/authentication/login",
                    element: <Login></Login>
                },
                {
                    path: "/authentication/registration",
                    element: <Registration></Registration>
                },
            ],
           }
        ]
    }
])

export default router;