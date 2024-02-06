import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100vh;
  
  h1 {
    font-size: 2.25rem; /* 36px */
    line-height: 2.5rem; /* 40px */
    font-weight: bold;
  }
`

export const LinkPage = styled(Link)`
  color: ${(props) => props.theme['base-subtitle']};
  text-underline-offset: 4px;
`