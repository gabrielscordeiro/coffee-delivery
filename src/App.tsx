import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'

import { router } from './routes'

function App() {

    return (
        <HelmetProvider>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Helmet titleTemplate="%s | Coffee Delivery" />

                <RouterProvider router={router} />
            </ThemeProvider>
        </HelmetProvider>
    )
}

export default App
