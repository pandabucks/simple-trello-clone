import styled from 'styled-components'
import { clouds } from '../../styles/colors'
import * as theme from '../../styles/theme'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${clouds};
`

export const DeleteBoardButton = styled.button`
  ${theme.danger};
  ${theme.shadow};
  ${theme.transition()};
  font-size: 1rem;
  padding: 0.5rem;
  border: none;

  &:hover,
  &:focus {
    ${theme.dangerAlt};
    cursor: pointer;
  }

  display: flex;
  align-items: center;
`

export const TaskLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  margin: -0.5rem;

  > * {
    margin: 0.5rem;
  }
`
