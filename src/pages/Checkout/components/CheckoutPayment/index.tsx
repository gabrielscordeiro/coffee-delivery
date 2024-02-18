import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { CardHeader } from '@/pages/Checkout/components/CardHeader'
import { PaymentOptions } from '@/pages/Checkout/components/CheckoutPayment/style.ts'
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

            <PaymentOptions>
                <button>
                    <CreditCard size={16} color={theme['purple']} />
                    Credit Card
                </button>

                <button>
                    <Bank size={16} color={theme['purple']} />
                    Bank
                </button>

                <button>
                    <Money size={16} color={theme['purple']} />
                    Money
                </button>
            </PaymentOptions>
        </BaseCard>
    )
}