import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: ${rem(10)} 0;
    background: ${(props) => props.theme['base-card']};
    ${mixins.fonts.textS};
    text-align: center;
  
    a {
        color: ${(props) => props.theme['base-text']};
        text-decoration: none;
      
        &:hover {
            text-decoration: underline;    
        }
    }
`