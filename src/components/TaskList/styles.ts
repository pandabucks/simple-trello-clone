import styled from 'styled-components'
import * as colors from '../../styles/colors'
import * as theme from '../../styles/theme'

export const Container = styled.article`
  width: 16rem;
  padding: 0.5rem;
  ${colors.foregroundAlt};
  ${theme.shadow};
`

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`

export const Tasks = styled.ul`
  > * + * {
    margin-top: 0.5rem;
  }
`
