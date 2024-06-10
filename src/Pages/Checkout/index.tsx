import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { AddressContext, IAddress } from '../../contexts/AddressContext.tsx'
import { EnderecoEntrega } from './components/EnderecoEntrega'
import { Pagamento } from './components/Pagamento'
import { Resumo } from './components/Resumo'
import { CheckoutContainer, CheckoutSection, SectionTitle } from './styles.ts'

interface CheckoutProps {
    setIsCheckoutDone: any
}

export function Checkout({setIsCheckoutDone}: CheckoutProps) {
    const { handleSetAddress } = useContext(AddressContext)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IAddress>()

    function onSubmit(data: IAddress) {
        handleSetAddress(data)
    }

    return (
        <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
            <CheckoutSection>
                <SectionTitle>Complete your order</SectionTitle>
                <EnderecoEntrega
                    register={register}
                    errors={errors}
                />
                <Pagamento/>
            </CheckoutSection>

            <CheckoutSection>
                <SectionTitle>Selected Coffees</SectionTitle>
                <Resumo errors={errors} setIsCheckoutDone={setIsCheckoutDone} />
            </CheckoutSection>
        </CheckoutContainer>
    )
}