import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from '@/pages/_layouts/BaseLayout'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
    },

    // {
    //     path: '*',
    //     element: <NotFound />
    // }
])