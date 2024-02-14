import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CoffeeContextProvider } from '@/contexts/CoffeeContext'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'

import { router } from './routes'

function App() {

    return (
        <HelmetProvider>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Helmet titleTemplate="%s | Coffee Delivery" />

                <CoffeeContextProvider>
                    <RouterProvider router={router} />
                </CoffeeContextProvider>
            </ThemeProvider>
        </HelmetProvider>
    )
}

export default App
