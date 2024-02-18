import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const CardHeaderContainer = styled.div`
    display: flex;
    gap: ${rem(8)};

    .titleArea {
        display: flex;
        flex-direction: column;
        gap: ${rem(2)};
    }

    h3 {
        ${mixins.fonts.textM}
        color: ${(props) => props.theme['base-subtitle']};
    }

    .subtitle {
        ${mixins.fonts.textS}
    }
`