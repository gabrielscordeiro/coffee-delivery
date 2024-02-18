import { CurrencyDollar } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { CardHeader } from '@/pages/Checkout/components/CardHeader'
import { BaseCard } from '@/pages/Checkout/style.ts'

export function CheckoutPayment() {
    const theme = useTheme()
    return (
        <BaseCard className="checkout-payment">
            <CardHeader
                icon={<CurrencyDollar size={22} color={theme['purple']}/>}
                title="Payment"
                subtitle="Payment is made upon delivery. Choose the way you want to pay"
            />
        </BaseCard>
    )
}