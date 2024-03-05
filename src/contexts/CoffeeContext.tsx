import { createContext, useState } from 'react'
import toast from 'react-hot-toast'

import { coffeeList } from '@/data/coffees.data.ts'

export interface ICart {
    [key: number]: number
}

interface ICoffeeContext {
    cart: ICart | undefined
    setCartItems: (coffeeId: number, quantity: number) => void
    removeCartItem: (coffeeId: number) => void
    changeCartItemQuantity: (coffeeId: number, qtd: number) => void
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

            saveItemsInStorage(updatedState)

            return updatedState
        })
    }

    function removeCartItem(coffeeId: number) {
        setCart((prevState) => {
            const newState = { ...prevState }
            delete newState[coffeeId]

            saveItemsInStorage(newState)
            return newState
        })

        toast.success(`Item ${coffeeList[coffeeId].name} removed from cart!`)
    }

    function changeCartItemQuantity(coffeeId: number, qtd: number) {
        setCart((prevState) => {
            const newState = { ...prevState }
            newState[coffeeId] = newState[coffeeId] + qtd <= 1 ? 1 : newState[coffeeId] + qtd

            saveItemsInStorage(newState)
            return newState
        })
    }

    function saveItemsInStorage(newState: ICart) {
        localStorage.setItem('cartItems', JSON.stringify(newState))
    }

    return (
        <CoffeeContext.Provider value={{
            cart,
            setCartItems,
            removeCartItem,
            changeCartItemQuantity,
        }}>
            {children}
        </CoffeeContext.Provider>
    )
}