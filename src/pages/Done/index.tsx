import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import { PaymentType } from '../../contexts/PaymentContext.tsx'
import doneIllustration from './assets/doneIllustration.svg'
import {
    CheckoutDoneContainer,
    DadosEntrega,
    DadosEntregaIcon,
    ItemDadosEntrega,
    PedidoConfirmado,
    PedidoConfirmadoTitle
} from './styles.ts'

const PaymentTypeNames = {
    [PaymentType.CARTAO_CREDITO]: 'Credit Card',
    [PaymentType.CARTAO_DEBITO]: 'Debit Card',
    [PaymentType.DINHEIRO]: 'Money'
}

export function Done() {
    const checkoutDoneData = localStorage.getItem('checkoutDoneData')
    const {selectedPaymentOption, address} = checkoutDoneData && JSON.parse(checkoutDoneData)
    const PaymentOptionName = PaymentTypeNames[selectedPaymentOption as keyof typeof PaymentTypeNames]

    return (
        <CheckoutDoneContainer>
            <PedidoConfirmado>
                <PedidoConfirmadoTitle>
                    <h1>Woohoo! Order confirmed</h1>
                    <span className="subTitle">Now just wait and the coffee will soon reach you.</span>
                </PedidoConfirmadoTitle>

                <DadosEntrega>
                    <ItemDadosEntrega>
                        <DadosEntregaIcon variant="purple">
                            <MapPin weight="fill" color="#fff" />
                        </DadosEntregaIcon>
                        <div className="dadosEntregaInfo">
                            <span>Deliver in <strong>Rua {address.rua}, {address.numero}</strong></span>
                            <span>{address.bairro} - {address.cidade}, {address.uf}</span>
                        </div>
                    </ItemDadosEntrega>
                    <ItemDadosEntrega>
                        <DadosEntregaIcon variant="yellow">
                            <Timer weight="fill" color="#fff" />
                        </DadosEntregaIcon>
                        <div className="dadosEntregaInfo">
                            <span>Delivery forecast</span>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </ItemDadosEntrega>
                    <ItemDadosEntrega>
                        <DadosEntregaIcon variant="yellowDark">
                            <CurrencyDollar color="#fff" />
                        </DadosEntregaIcon>
                        <div className="dadosEntregaInfo">
                            <span>Payment on delivery</span>
                            <strong>{PaymentOptionName}</strong>
                        </div>
                    </ItemDadosEntrega>
                </DadosEntrega>
            </PedidoConfirmado>

            <img src={doneIllustration} alt="" />
        </CheckoutDoneContainer>
    )
}