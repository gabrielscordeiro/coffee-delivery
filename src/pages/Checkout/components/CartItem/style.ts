import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const Coffee = styled.div`
    display: flex;
    padding: ${rem(32)} 0;
    border-bottom: 1px solid ${(props) => props.theme['base-button']}; 
  
    > div {
        display: flex;
        gap: ${rem(20)};
    }
`

export const CoffeeInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  
    h3 {
        ${mixins.fonts.textM}
    }
`

export const Actions = styled.div`
    display: flex;
    gap: ${rem(8)};

    .quantity {
        display: flex;
        place-items: center;
        padding: ${rem(8)};
        gap: ${rem(8)};
        border-radius: ${rem(6)};
        background: ${(props) => props.theme['base-button']};

        svg {
            cursor: pointer;
        }
    }

    button {
        display: flex;
        place-items: center;
        padding: ${rem(8)};
        gap: ${rem(8)};
        border-radius: ${rem(6)};
        background: ${(props) => props.theme['base-button']};
        cursor: pointer;
        transition: all .15s ease;
        ${mixins.fonts.textS}

        &:hover {
            background: ${(props) => props.theme['purple-light']};
        }
    }
`