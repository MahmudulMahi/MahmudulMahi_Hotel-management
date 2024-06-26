import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from "../pages/RoomDetails/RoomDetails"
import PrivateRoute from './PrivateRoute'
import { getRoom } from '../api/rooms'
import Dashboard from '../layouts/Dashboard'
import AddRoom from '../pages/Dashboard/Host/AddRoom'

import MyListings from '../pages/Dashboard/Host/MyListings'
import HostRoute from './HostRoute'
import AdminRoute from './AdminRoute'

import Profile from '../pages/Dashboard/Common/Profile'
import MyBookings from '../pages/Dashboard/Guest/MyBookings'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'
import ManageUser from '../pages/Dashboard/Admin/ManageUser'

import Statistics from '../pages/Dashboard/Common/Statistics'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({ params }) => getRoom(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard', element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics></Statistics>
          </PrivateRoute>
        ),
      },
      {
        path:'add-room',
        element:<PrivateRoute><HostRoute><AddRoom></AddRoom></HostRoute></PrivateRoute>
      },
      {
        path:'my-listings',
        element:<PrivateRoute><HostRoute><MyListings></MyListings></HostRoute></PrivateRoute>
      },
      {
        path:'manage-users',
        element:<PrivateRoute><AdminRoute><ManageUser></ManageUser></AdminRoute></PrivateRoute>
      },
      {
        path:'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'my-bookings',
        element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path:'manage-bookings',
        element:<HostRoute><ManageBookings></ManageBookings></HostRoute>
      }
     
      
    ]
  },
])
