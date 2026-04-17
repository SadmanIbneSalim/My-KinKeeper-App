import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/NavButtons/Home/Home';

import Timeline from './Components/NavButtons/Timeline/Timeline';
import Stats from './Components/NavButtons/stats/Stats';
import CardDetails from './Components/Cards/CardDetails';
import FriendsProvider from './Components/context/FriendsProvider';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './Components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard></Dashboard>,
    children:[
      {index:true, element:<Home></Home>},
      {path: 'timeline' , element:<Timeline></Timeline> },
      {path: 'stats', element:<Stats></Stats>},
      {path:'home/cardDetails/:id',
        loader: ()=>fetch('/Friends.json'),
         element:<CardDetails></CardDetails>
        
        }
        
    ],

    errorElement:<ErrorPage></ErrorPage>

  },
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider> 
    <RouterProvider router={router} />
    <ToastContainer />
</FriendsProvider>
  </StrictMode>,
)
