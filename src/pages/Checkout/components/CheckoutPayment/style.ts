import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const PaymentOptions = styled.div`
    display: flex;
    gap: ${rem(12)};
    margin-top: ${rem(32)};
    
    button {
        display: flex;
        place-items: center;
        width: 100%;
        gap: ${rem(12)};
        padding: ${rem(16)};
        background: ${(props) => props.theme['base-button']};
        border-radius: ${rem(6)};
        border: 0;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .15s ease;
        ${mixins.fonts.textS}
        
        &:hover {
          background: ${(props) => props.theme['purple-light']};
        }
    }
`