import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/AboutUS/About';
import Products from './component/Products/Products';
import Home from './component/Home/Home';
import Main from './layouts/Main';
import NotFound from './component/NotFound/NotFound';
import Orders from './component/Orders/Orders';
import Login from './component/Login/Login';
import Registration from './component/Registration/Registration';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "home",
            element: <Home></Home>,
          },
          {
            path: "orders",
            element: (
              <PrivateRoute>
                <Orders></Orders>
              </PrivateRoute>
            ),
          },

          {
            path: "about",
            element: <About></About>,
          },
          {
            path: "products",
            element: (
              <PrivateRoute>
                <Products></Products>
              </PrivateRoute>
            ),
          },
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Registration></Registration>,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default App;