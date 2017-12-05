import styled, { css } from 'styled-components'
import * as theme from '../../styles/theme'

export const shadedSection = css`
  ${theme.primaryAlt};
  padding: 1rem;
`

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  ${shadedSection};
`

export const Content = styled.section`
  ${theme.primary};
  flex-grow: 1;
`

export const Footer = styled.footer`
  ${shadedSection};
`
