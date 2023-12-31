import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";

import SignUp from "../Pages/Shared/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Shared/Login/Login";
import CollegeDetails from "../Pages/Home/Home/CollegeCard/CollegeDetails/CollegeDetails";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/my-college",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singUp",
        element: <SignUp />,
      },
      {
        path: "/college-details/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://find-your-college-server-chandan-chandra-shil.vercel.app/college-details/${params.id}`
          ),
      },
    ],
  },
]);
