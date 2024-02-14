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
    margin-top: ${rem(15)};

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

export const CoffeeItemActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .qtdSelectorBuy {
        display: flex;
        gap: ${rem(8)};
      
        span {
          ${mixins.fonts.titleS};
          padding: 0 ${rem(4)};
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${rem(8)};
        background: ${(props) => props.theme['purple']};
        border-radius: 8px;
        transition: background 0.15s ease;
      
        &:disabled {
            cursor: not-allowed;
            opacity: 0.8;
          
            &:hover {
                background: ${(props) => props.theme['purple']};
            }
        }
        
        &:hover {
            background: ${(props) => props.theme['purple-dark']};
        }
    }
`

export const CoffeePrice = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    
    .prefix {
      ${mixins.fonts.textS};
    }
    
    .price {
      ${mixins.fonts.titleM};
    } 
`


export const ItemQuantitySelector = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${rem(8)});
    padding: ${rem(2)} ${rem(10)};
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    overflow: hidden;
    user-select: none;
    
    svg {
        cursor: pointer;
    }
`