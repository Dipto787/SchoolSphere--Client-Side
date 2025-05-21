import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import OurStudents from "../Pages/Our Student/OurStudents";

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
                element:<OurStudents></OurStudents>
            }
        ]
    }
])

export default Routes;