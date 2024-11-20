import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import AboutDev from "../pages/AboutDev";
import AuthenticationPage from "../pages/AuthenticationPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ErrorPage from "../ErrorElement/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../pages/BrandDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/coupons.json"),
      },
      {
        path: "/brand/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: async ({params}) => {
            const res = await fetch("/coupons.json");
            const data = await res.json();
            const singleData = data.find(single => single._id == params.id);

            return singleData;
        }
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("/coupons.json"),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutDev",
        element: <AboutDev></AboutDev>,
      },
      {
        path: "/authentication",
        element: <AuthenticationPage></AuthenticationPage>,
        children: [
          {
            path: "/authentication/login",
            element: <Login></Login>,
          },
          {
            path: "/authentication/registration",
            element: <Registration></Registration>,
          },
        ],
      },
    ],
  },
]);

export default router;
