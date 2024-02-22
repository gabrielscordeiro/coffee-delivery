import { rem } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: min(${rem(1184)}, 100% - 2rem);
    margin-inline: auto;
`