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
  
    h3 {
        ${mixins.fonts.textM}
    }
`