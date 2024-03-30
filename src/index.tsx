import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Error404 from './components/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: '/', element: <Home />}
    ],
    errorElement: <Error404 />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);