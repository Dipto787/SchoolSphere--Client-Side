import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import OurStudents from "../Pages/Our Student/OurStudents";
import Register from "../Pages/AuthenticationPage/Register";
import Login from "../Pages/AuthenticationPage/Login";
import PrivateRoute from "./PrivateRoute";

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