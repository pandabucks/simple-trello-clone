import { css } from 'styled-components'
import * as colors from './colors'

export const shadow = css`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`

export const background = css`
  background-color: ${colors.blue};
  color: ${colors.clouds};
`

export const backgroundAlt = css`
  background-color: ${colors.blueDark};
  color: ${colors.clouds};
`

export const foreground = css`
  background-color: ${colors.clouds};
  color: ${colors.asphaltDark};
`

export const foregroundAlt = css`
  background-color: ${colors.cloudsDark};
  color: ${colors.asphaltDark};
`