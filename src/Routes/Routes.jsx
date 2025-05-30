import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import OurStudents from "../Pages/Our Student/OurStudents";
import Register from "../Pages/AuthenticationPage/Register";
import Login from "../Pages/AuthenticationPage/Login";
import PrivateRoute from "./PrivateRoute";
import OurBenefits from "../Pages/Our-Benefits/OurBenefits";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import StudentHome from "../Pages/Dashboard/StudentHome";
import MyClassRoom from "../Pages/Dashboard/MyClassRoom";
import RegistrationStudent from "../Pages/RegistrationStudent";
import StudentRoute from "./StudentRoute"; 
import OurStudentsAdmin from "../Pages/Dashboard/OurStudentsAdmin";
import AllStudents from "../Pages/Dashboard/AllStudents";
import AddRoutine from "../Pages/Dashboard/AddRoutine";
import SeeRoutine from "../Pages/Dashboard/SeeRoutine";
import RoutineUpdate from "../Pages/Dashboard/RoutineUpdate";
import ClassRoutine from "../Pages/Dashboard/ClassRoutine";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/our-student',
                element: <PrivateRoute><OurStudents></OurStudents></PrivateRoute>
            },

            {
                path: '/our-benefits',
                element: <PrivateRoute> <OurBenefits></OurBenefits></PrivateRoute>
            },
            {

                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/registration',
                element:<StudentRoute><RegistrationStudent></RegistrationStudent></StudentRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                index: true,
                element: <StudentHome></StudentHome>
            },
            {
                path:'myClassRoom',
                element:<MyClassRoom></MyClassRoom>
            },
            {
                path:'our-students',
                element:<OurStudentsAdmin></OurStudentsAdmin>
            },
            {
                path:'all-students',
                element:<AllStudents></AllStudents>
            },
            {
                path:'add-routine',
                element:<AddRoutine></AddRoutine>
            },
            {
                path:'see-routine',
                element:<SeeRoutine></SeeRoutine>
            },
            {
                path:'update-routine/:id',
                element:<RoutineUpdate></RoutineUpdate>
            },
            {
                path:'class-routine',
                element:<ClassRoutine></ClassRoutine>
            },
           
        ]
    }
]

)



export default Routes;