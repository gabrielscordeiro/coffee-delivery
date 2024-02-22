import { createContext, useState } from 'react'

export interface ICart {
    [key: number]: number
}

interface ICoffeeContext {
    cart: ICart | undefined
    setCartItems: (coffeeId: number, quantity: number) => void
}

export const CoffeeContext = createContext({} as ICoffeeContext)

export function CoffeeContextProvider({ children }: { children: React.ReactNode}) {
    const cartItemsStorage = localStorage.getItem('cartItems')
    const initialValueCart = cartItemsStorage ? JSON.parse(cartItemsStorage) : {}

    const [cart, setCart] = useState<ICart>(initialValueCart)

    function setCartItems(coffeeId: number, itemQtd: number) {
        setCart((prevState) => {
            const updatedState = { ...prevState }
            updatedState[coffeeId] = itemQtd

            localStorage.setItem('cartItems', JSON.stringify(updatedState))

            return updatedState
        })
    }

    return (
        <CoffeeContext.Provider value={{
            cart,
            setCartItems
        }}>
            {children}
        </CoffeeContext.Provider>
    )
}