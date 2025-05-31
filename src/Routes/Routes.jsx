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
import AddExamSchedule from "../Pages/Dashboard/AddExamSchedule";
import SeeUserNotification from "../Pages/Dashboard/SeeUserNotification";
import ExamScheduleStudent from "../Pages/Dashboard/ExamScheduleStudent";
import ExamScheduleAdmin from "../Pages/Dashboard/ExamScheduleAdmin";
import VerifyAdmin from "../hooks/VerifyAdmin";

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
                path: '/registration',
                element:<PrivateRoute><RegistrationStudent></RegistrationStudent></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'home',
                element: <StudentHome></StudentHome>
            },
          
            {
                path: 'our-students',
                element:<VerifyAdmin> <OurStudentsAdmin></OurStudentsAdmin></VerifyAdmin>
            },
            {
                path: 'all-students',
                element:<VerifyAdmin> <AllStudents></AllStudents></VerifyAdmin>
            },
            {
                path: 'add-routine',
                element: <VerifyAdmin><AddRoutine></AddRoutine></VerifyAdmin>
            },
            {
                path: 'see-routine',
                element: <VerifyAdmin><SeeRoutine></SeeRoutine></VerifyAdmin>
            },
            {
                path: 'update-routine/:id',
                element: <VerifyAdmin><RoutineUpdate></RoutineUpdate></VerifyAdmin>
            },
            {
                path: 'class-routine',
                element: <StudentRoute> <ClassRoutine></ClassRoutine></StudentRoute>
            },
            {
                path: 'add-exam-schedule',
                element: <VerifyAdmin><AddExamSchedule></AddExamSchedule></VerifyAdmin>
            },
            {
                path: 'see-notification',
                element: <StudentRoute><SeeUserNotification></SeeUserNotification></StudentRoute>
            },
            {
                path: 'exam-schedule',
                element: <StudentRoute><ExamScheduleStudent></ExamScheduleStudent></StudentRoute>
            },
            {
                path: 'exam-schedule-admin',
                element: <VerifyAdmin><ExamScheduleAdmin></ExamScheduleAdmin></VerifyAdmin>
            }

        ]
    }
]

)



export default Routes;