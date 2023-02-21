import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

const wrappingModifiers = {
  small() {
    return css`
      width: 2.3rem;
      height: 2.3rem;
      padding: 8px;

      svg {
        color: ${({ theme }) => theme.colors.product['yellow-dark']};
        fill: ${({ theme }) => theme.colors.product['yellow-dark']};
      }
    `
  },
  medium() {
    return css`
      width: 23rem;
      height: 2.8rem;
    `
  },
}

export const Container = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.product['yellow-light']};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  ${({ theme, size }) => wrappingModifiers[size]}
`
