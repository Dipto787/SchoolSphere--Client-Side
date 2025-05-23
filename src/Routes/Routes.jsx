import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import OurStudents from "../Pages/Our Student/OurStudents";
import Register from "../Pages/AuthenticationPage/Register";
import Login from "../Pages/AuthenticationPage/Login";
import PrivateRoute from "./PrivateRoute";
import OurBenefits from "../Pages/Our-Benefits/OurBenefits";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path:'/our-student',
                element:<PrivateRoute><OurStudents></OurStudents></PrivateRoute>
            },

            {
                path:'/our-benefits',
                element:<OurBenefits></OurBenefits>
            },
            {

                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default Routes;