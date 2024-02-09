import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const CoffeeItemContainer = styled.li`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${(props) => props.theme['base-card']};
    border-radius: ${rem(6)} ${rem(36)};
    padding: ${rem(20)};

  h3 {
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    ${mixins.fonts.textS}
    margin: 8px 0 32px 0;
    padding: 0 ${rem(4)};    
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeImageContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: ${rem(90)};
    
    img {
        position: absolute;
        top: -${rem(30)};
        max-width: ${rem(120)};
        height: auto;
    }
`

export const CoffeeItemTag = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
    
    span {
        padding: ${rem(4)} ${rem(8)};
        text-transform: uppercase;
        font-size: ${rem(10)};
        line-height: normal;
        color: ${(props) => props.theme['yellow-dark']};
        background: ${(props) => props.theme['yellow-light']};
        border-radius: ${rem(100)};
    }
`