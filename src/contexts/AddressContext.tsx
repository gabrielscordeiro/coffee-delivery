import { createContext, ReactNode, useState } from 'react'

export interface IAddress {
    cep: string
    rua: string
    numero: number
    complemento: string
    bairro: string
    cidade: string
    uf: string
}

interface IAddressContext {
    address: IAddress | null
    handleSetAddress: (address: IAddress | null) => void
}

export const AddressContext = createContext({} as IAddressContext)

interface AddressContextProviderProps {
    children: ReactNode
}

export function AddressContextProvider({children}: AddressContextProviderProps) {
    const [address, setAddress] = useState<IAddress | null>(null)

    function handleSetAddress(addressFormData: IAddress | null) {
        setAddress(addressFormData)
    }

    return (
        <AddressContext.Provider value={{address, handleSetAddress}}>
            {children}
        </AddressContext.Provider>
    )
}