import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const BannerContainer = styled.div`
  display: flex;
  padding: 94px 0;
  gap: 56px;
  
  @media(max-width: 950px) {
    flex-direction: column;
  }

  h1 {
    ${mixins.fonts.titleXL};
    color: ${({ theme }) => theme['base-title']}
  }

  span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']}
  }
  
  img {
    display: block;
  }
`


export const Benefits = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    row-gap: 16px;
    margin-top: 66px;
`

interface BenefitItemProps {
    color: 'yellow' | 'yellow-dark' | 'purple' | 'base-text'
}

export const BenefitItem = styled.div<BenefitItemProps>`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    ${mixins.fonts.textM}

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background: ${(props) => props.theme[props.color]};
        border-radius: 50%;
    }
`