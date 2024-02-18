import { MapPinLine } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { CardHeader } from '@/pages/Checkout/components/CardHeader'
import { FormAddress } from '@/pages/Checkout/components/CheckoutAddress/style.ts'
import { BaseCard } from '@/pages/Checkout/style.ts'

export function CheckoutAddress() {
    const theme = useTheme()

    return (
        <BaseCard className="checkout-address">
            <CardHeader
                icon={<MapPinLine size={22} color={theme['yellow-dark']} />}
                title="Delivery address"
                subtitle="Enter the address where you would like to receive your order"
            />

            <FormAddress>
                <input
                    id="zipcode"
                    placeholder="Zip Code"
                />

                <input
                    id="street"
                    placeholder="Street"
                />

                <input
                    id="number"
                    placeholder="Number"
                />

                <input
                    id="complement"
                    placeholder="Complement"
                />

                <input
                    id="neighborhood"
                    placeholder="Neighborhood"
                />

                <input
                    id="city"
                    placeholder="city"
                />

                <input
                    id="state"
                    placeholder="State"
                />
            </FormAddress>
        </BaseCard>
    )
}
