import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Hero, Contact,Destinations, Gallery, AllDestinations, Services, Testimonials,AdminTrekForm, SignInForm, SignUpForm ,DestinationDetails , BookingForm, AdminPanel, EditTrekForm, checkUserAuthLoader, checkAdminAuthLoader, Unauthorized} from './components'

import {Provider} from "react-redux"
import { store } from './App/store.js'



const router = createBrowserRouter([
  {
      path : '/admin',
      element : <AdminPanel/>,
      loader : checkAdminAuthLoader,
    },
    {
        path: '/addTrek',
        element: <AdminTrekForm />,
        loader : checkAdminAuthLoader,
      },
      {
        path: '/editTrek',
        element: <EditTrekForm />,
        loader : checkAdminAuthLoader,
      },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <>
        <Hero />
        <Destinations/>
        <Services/>
        <Gallery/>
        <Testimonials/>
        </>
      },
      {
        path: 'destinations',
        element: <AllDestinations />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'testimonials',
        element: <Testimonials />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'signup',
        element: <SignUpForm />
      },
      {
        path: 'signin',
        element: <SignInForm />
      },
      {
        path : 'destinationdetails',
        element : <DestinationDetails/>
      },
       {
        path : 'booking',
        element : <BookingForm/>,
        loader : checkUserAuthLoader,
      },
    
    ]},
    {
        path : "*",
        element : <Unauthorized/>
      }

])

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router={router} />
  </Provider>,
)

// structure            {
//         path : 'booking',
//         element : <BookingForm/>,
//         loader : checkUserAuthLoader,
//       },