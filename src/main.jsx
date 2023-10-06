import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Components/Root/Root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
