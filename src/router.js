// router.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import IndexProduct from './pages/products/IndexProduct';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/layouts/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: '/products',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <IndexProduct />
            }
        ]
    }
]);

export default router;
