import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const ContainerCheckout = styled.div`
    display: flex;
    width: min(${rem(1120)}, 100% - 2rem);
    gap: ${rem(32)};
`

export const BaseCard = styled.div`
    padding: ${rem(40)};
    background: ${(props) => props.theme['base-card']};
    border-radius: ${rem(8)};
`

export const OrderSteps = styled.div`
    display: flex;
    flex-direction: column;
    width: ${rem(640)};
    gap: ${rem(12)};
  
    h1 {
      ${mixins.fonts.titleXS}
    }
`

export const OrderInfo = styled.div`
    width: ${rem(448)};
      
    h2 {
        ${mixins.fonts.titleXS}    
    }  
`
export const SelectedCoffeesCard = styled(BaseCard)`
    margin-top: ${rem(12)};
    border-radius: 0 ${rem(40)} 0 ${rem(40)};
    padding-top: ${rem(8)};
`

export const Resume = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${rem(24)};
    gap: ${rem(12)};
  
    .row {
        display: flex;
        justify-content: space-between;
        ${mixins.fonts.textS}
      
        &.total {
            ${mixins.fonts.textL};
            font-weight: bold;
        }
    }
`

export const ConfirmOrderButton = styled.button`
    width: 100%;
    padding: ${rem(12)};
    border-radius: ${rem(6  )};
    background: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    text-transform: uppercase;
    margin-top: ${rem(36)};
  
    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
`