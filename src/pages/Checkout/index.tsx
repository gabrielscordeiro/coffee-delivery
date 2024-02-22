import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'

import { CoffeeContext } from '@/contexts/CoffeeContext.tsx'
import { CartItem } from '@/pages/Checkout/components/CartItem'
import { CheckoutAddress } from '@/pages/Checkout/components/CheckoutAddress'
import { CheckoutPayment } from '@/pages/Checkout/components/CheckoutPayment'
import { ContainerCheckout, OrderInfo, OrderSteps, SelectedCoffees } from '@/pages/Checkout/style.ts'

export function Checkout() {
    const { cart } = useContext(CoffeeContext)


    return (
        <ContainerCheckout>
            <Helmet title="Checkout" />
            
            <OrderSteps>
                <h1>
                    Complete your order
                </h1>

                <CheckoutAddress />
                <CheckoutPayment />
            </OrderSteps>

            <OrderInfo>
                <h2>
                    Selected coffees
                </h2>

                <SelectedCoffees>
                    {cart && Object.keys(cart).map(item => (
                        <CartItem key={item} itemId={Number(item)} />
                    ))}
                </SelectedCoffees>
            </OrderInfo>
        </ContainerCheckout>
    )
}