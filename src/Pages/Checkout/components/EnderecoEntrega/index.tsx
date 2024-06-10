import { MapPinLine } from '@phosphor-icons/react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { IAddress } from '../../../../contexts/AddressContext.tsx'
import { CheckoutCardContainer } from '../../styles.ts'
import { CheckoutCardHeader } from '../CheckoutCardHeader'
import { EnderecoFormArea } from './styles.ts'

interface IEnderecoEntrega {
    errors: FieldErrors<IAddress>
    register: UseFormRegister<IAddress>
}

export function EnderecoEntrega({errors, register}: IEnderecoEntrega) {
    const theme = useTheme()

    return (
        <CheckoutCardContainer>
            <CheckoutCardHeader
                icon={<MapPinLine size={22} color={theme['yellow-dark']} />}
                title="Delivery address"
                subtitle="Enter the address where you would like to receive your order"
            />

            <EnderecoFormArea>
                <input
                    id="cep"
                    placeholder="CEP"
                    className={errors.cep ? 'invalid' : ''}
                    {...register('cep',  {required: true})}
                />
                <input
                    id="rua"
                    placeholder="Street"
                    className={errors.rua ? 'invalid' : ''}
                    {...register('rua', {required: true})}
                />
                <input
                    id="numero"
                    placeholder="Number"
                    className={errors.numero ? 'invalid' : ''}
                    {...register('numero', {required: true})}
                />
                <input
                    id="complemento"
                    placeholder="Complement"
                    className={errors.complemento ? 'invalid' : ''}
                    {...register('complemento', {required: true})}
                />
                <input
                    id="bairro"
                    placeholder="Neighborhood"
                    className={errors.bairro ? 'invalid' : ''}
                    {...register('bairro', {required: true})}
                />
                <input
                    id="cidade"
                    placeholder="City"
                    className={errors.cidade ? 'invalid' : ''}
                    {...register('cidade', {required: true})}
                />
                <input
                    id="uf"
                    placeholder="State"
                    className={errors.uf ? 'invalid' : ''}
                    {...register('uf', {required: true})}
                />
            </EnderecoFormArea>
        </CheckoutCardContainer>
    )
}