import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

import { PaymentContext, PaymentType } from '../../../../contexts/PaymentContext.tsx'
import { CheckoutCardContainer } from '../../styles.ts'
import { CheckoutCardHeader } from '../CheckoutCardHeader'
import { PaymentOptionsArea } from './styles.ts'


export function Pagamento() {
    const theme = useTheme()
    const {selectedPaymentOption, handlePaymentOptionChange} = useContext(PaymentContext)

    return (
        <CheckoutCardContainer>
            <CheckoutCardHeader
                icon={<CurrencyDollar size={22} color={theme['purple']}/>}
                title="Payment"
                subtitle="Payment is made upon delivery. Choose the way you want to pay"
            />

            <PaymentOptionsArea>
                <button
                    onClick={() => handlePaymentOptionChange(PaymentType.CARTAO_CREDITO)}
                    className={selectedPaymentOption === PaymentType.CARTAO_CREDITO ? 'selected' : ''}
                >
                    <CreditCard size={16} color={theme['purple']} />
                    Credit card
                </button>
                <button
                    onClick={() => handlePaymentOptionChange(PaymentType.CARTAO_DEBITO)}
                    className={selectedPaymentOption === PaymentType.CARTAO_DEBITO ? 'selected' : ''}
                >
                    <Bank size={16} color={theme['purple']} />
                    Debit card
                </button>
                <button
                    onClick={() => handlePaymentOptionChange(PaymentType.DINHEIRO)}
                    className={selectedPaymentOption === PaymentType.DINHEIRO ? 'selected' : ''}
                >
                    <Money size={16} color={theme['purple']} />
                    Money
                </button>
            </PaymentOptionsArea>
        </CheckoutCardContainer>
    )
}