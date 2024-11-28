import { createBrowserRouter, Route, RouterProvider,} from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/product/:eventId',
        element: <Product />
    },
    {
        path: '/profile',
        element: <Profile />,
        children: [
        {
            path: 'profile/my-info',
            element: <div>My info</div>
        }, {
            path: 'profile/liked-products',
            element: <div>Liked products</div>
        }
    ]
    },
    {
        path: '/cart',
        element: <Cart />
    },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;