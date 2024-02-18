import { rem } from 'polished'
import styled from 'styled-components'

import { mixins } from '@/styles/fonts.ts'

export const FormAddress = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${rem(12)};
    margin-top: ${rem(32)};
    
    input {
        padding: 12px;
        align-items: center;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme['base-button']};
        background: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-label']};
        ${mixins.fonts.textS}
      
        &#zipcode,
        &#number, 
        &#neighborhood {
            width: ${rem(200)};
        }
      
        &#street {
            width: 100%;
        }
      
        &#complement {
          width: ${rem(348)};
        }

        &#city {
            width: ${rem(276)};
        }

        &#state {
            width: ${rem(60)};
        }
    }
`