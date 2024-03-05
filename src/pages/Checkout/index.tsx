import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'

import { CoffeeContext } from '@/contexts/CoffeeContext.tsx'
import { coffeeList } from '@/data/coffees.data.ts'
import { CartItem } from '@/pages/Checkout/components/CartItem'
import { CheckoutAddress } from '@/pages/Checkout/components/CheckoutAddress'
import { CheckoutPayment } from '@/pages/Checkout/components/CheckoutPayment'
import {
    ConfirmOrderButton,
    ContainerCheckout,
    OrderInfo,
    OrderSteps,
    Resume,
    SelectedCoffeesCard
} from '@/pages/Checkout/style.ts'
import { priceFormatter } from '@/utils/formatter.ts'

export function Checkout() {
    const { cart } = useContext(CoffeeContext)

    const frete = 3.50

    let totalItems = 0
    let totalEntrega = 0

    cart && Object.keys(cart).forEach((item) => {
        totalItems += coffeeList[Number(item)].price * cart[Number(item)]
        totalEntrega += frete * cart[Number(item)]
    })


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
                <SelectedCoffeesCard>

                    <div>
                        {cart && Object.keys(cart).map(item => (
                            <CartItem key={item} coffeeItemCart={{[item]: cart[Number(item)]}} />
                        ))}
                    </div>

                    <Resume>
                        <div className="row">
                            <span>Total items</span>
                            <span>{priceFormatter(totalItems)}</span>
                        </div>
                        <div className="row">
                            <span>Delivery</span>
                            <span>{priceFormatter(totalEntrega)}</span>
                        </div>
                        <div className="row total">
                            <span>Total</span>
                            <span>{priceFormatter(totalItems + totalEntrega)}</span>
                        </div>
                    </Resume>

                    <ConfirmOrderButton
                        type="submit"
                    >
                        Confirm order
                    </ConfirmOrderButton>

                </SelectedCoffeesCard>
            </OrderInfo>
        </ContainerCheckout>
    )
}