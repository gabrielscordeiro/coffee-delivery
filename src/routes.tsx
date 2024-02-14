import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from '@/pages/_layouts/BaseLayout'
import { Checkout } from '@/pages/Checkout'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound/404'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/checkout', element: <Checkout /> }
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }
])