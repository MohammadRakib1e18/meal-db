import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './component/AboutUS/About';
import Products from './component/Products/Products';
import Home from './component/Home/Home';
import Main from './layouts/Main';
import NotFound from './component/NotFound/NotFound';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/products',
                    element: <Products></Products>
                }
            ]
        },
        {
            path: '*',
            element: <NotFound></NotFound>
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default App;