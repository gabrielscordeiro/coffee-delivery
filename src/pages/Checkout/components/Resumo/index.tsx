import { useContext } from 'react'
import { FieldErrors } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { AddressContext, IAddress } from '../../../../contexts/AddressContext.tsx'
import { CoffeeContext } from '../../../../contexts/CoffeeContext.tsx'
import { PaymentContext } from '../../../../contexts/PaymentContext.tsx'
import { coffees } from '../../../../data/coffees.ts'
import { formatCurrency } from '../../../../utils/formatCurrency.ts'
import { CheckoutCardContainer } from '../../styles.ts'
import { CartItem } from './CartItem'
import { CartItemsWrapper, ConfirmCheckoutButton, PriceArea } from './styles.ts'

interface ResumoProps {
    errors: FieldErrors<IAddress>
    setIsCheckoutDone: any
}

export function Resumo({ errors, setIsCheckoutDone }: ResumoProps) {
    const { selectedPaymentOption, handlePaymentOptionChange } = useContext(PaymentContext)
    const { cart, cleanCart } = useContext(CoffeeContext)
    const { handleSetAddress, address } = useContext(AddressContext)

    const navigate = useNavigate()
    const hasInvalidFields = Boolean(selectedPaymentOption == null || Object.keys(errors).length)
    const valorEntrega = 3.50


    let totalItems = 0
    let totalEntrega = 0

    cart && Object.keys(cart).forEach((item) => {
        totalItems += coffees[Number(item)].price * cart[Number(item)]
        totalEntrega += valorEntrega * cart[Number(item)]
    })

    function validateCheckout() {
        if (hasInvalidFields) {
            toast.error('Some required fields were not filled in')
        } else {
            localStorage.setItem('checkoutDoneData', JSON.stringify({
                selectedPaymentOption,
                address
            }))

            handlePaymentOptionChange(null)
            handleSetAddress(null)
            cleanCart()

            setIsCheckoutDone(true)
            navigate('/checkout/done')
        }
    }

    return (
        <CheckoutCardContainer hasCustomBorderRadius={true}>
            <CartItemsWrapper>
                {cart && Object.keys(cart).map((cartItem) => (
                    <CartItem key={cartItem} coffeeItemCart={{[cartItem]: cart[Number(cartItem)]}} />
                ))}
            </CartItemsWrapper>

            <PriceArea>
                <div className="priceInfo">
                    <span>Total items</span>
                    <span>{formatCurrency(totalItems)}</span>
                </div>
                <div className="priceInfo">
                    <span>Address</span>
                    <span>{formatCurrency(totalEntrega)}</span>
                </div>
                <div className="priceInfo totalArea">
                    <span>Total</span>
                    <span>{formatCurrency(totalItems + totalEntrega)}</span>
                </div>
            </PriceArea>

            <ConfirmCheckoutButton
                type="submit"
                className="confirmCheckout"
                onClick={validateCheckout}
            >
                Confirm Order
            </ConfirmCheckoutButton>
        </CheckoutCardContainer>
    )
}