import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AddressContextProvider } from './contexts/AddressContext.tsx'
import { CoffeeContextProvider } from './contexts/CoffeeContext.tsx'
import { PaymentContextProvider } from './contexts/PaymentContext.tsx'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './Pages/Checkout'
import { Done } from './Pages/Done'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'

function App() {
    const [isCheckoutDone, setIsCheckoutDone] = useState(!!localStorage.getItem('checkoutDoneData'))

    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CoffeeContextProvider>
                    <AddressContextProvider>
                        <PaymentContextProvider>
                            <Routes>
                                <Route path="/" element={<DefaultLayout/>}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/checkout" element={<Checkout setIsCheckoutDone={setIsCheckoutDone} />} />
                                    <Route path="/checkout/done" element={
                                        isCheckoutDone ?
                                            <Done /> :
                                            <Navigate to="/checkout" />
                                    } />
                                </Route>
                            </Routes>
                        </PaymentContextProvider>
                    </AddressContextProvider>
                </CoffeeContextProvider>
            </BrowserRouter>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
