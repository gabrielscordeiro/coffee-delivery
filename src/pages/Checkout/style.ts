import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'


export const BaseCard = styled.div`
    padding: ${rem(40)};
    background: ${(props) => props.theme['base-card']};
    border-radius: ${rem(8)};
`

export const OrderSteps = styled.div`
    display: flex;
    flex-direction: column;
    width: 640px;
    gap: ${rem(12)};
  
    h1 {
      ${mixins.fonts.titleXS}
    }
`

export const OrderInfo = styled.div`
`