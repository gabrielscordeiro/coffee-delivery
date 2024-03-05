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

export const SelectedCoffees = styled(BaseCard)`
    margin-top: ${rem(12)};
    border-radius: 0 ${rem(40)} 0 ${rem(40)};
    padding-top: ${rem(8)};
`