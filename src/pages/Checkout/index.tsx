import { Helmet } from 'react-helmet-async'

import { Container } from '@/pages/_layouts/styles.ts'
import { CheckoutAddress } from '@/pages/Checkout/components/CheckoutAddress'
import { CheckoutPayment } from '@/pages/Checkout/components/CheckoutPayment'
import { OrderInfo, OrderSteps } from '@/pages/Checkout/style.ts'

export function Checkout() {
    return (
        <Container>
            <Helmet title="Checkout" />
            
            <OrderSteps>
                <h1>
                    Complete your order
                </h1>

                <CheckoutAddress />
                <CheckoutPayment />
            </OrderSteps>

            <OrderInfo>

            </OrderInfo>
        </Container>
    )
}