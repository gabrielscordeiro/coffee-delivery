import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const CoffeeListContainer = styled.div`
  margin-top: ${rem(32)};
  
  h2 {
    ${mixins.fonts.titleL};
    margin-bottom: ${rem(54)};
  }
`

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: ${rem(32)};
  place-items: center;
`