import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/NavButtons/Home/Home';
import Hero from './Components/Hero/Hero';
import Timeline from './Components/NavButtons/Timeline/Timeline';
import Stats from './Components/NavButtons/stats/Stats';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Dashboard,
    children:[
      {index:true, Component:Home},
      {path: 'timeline' , Component: Timeline },
      {path: 'stats', Component: Stats}
    ]

  },
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
