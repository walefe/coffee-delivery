import { ShoppingCart } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.5rem;
`

export const LogoImage = styled.img`
  width: 5rem;
  height: 2.5rem;
`

export const WrapperLocationTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 12rem;
  width: 100%;
`

export const LocationTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 143px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.product["purple-light"]};
  border-radius: 6px;

  p {
    color: ${({ theme }) => theme.colors.product["purple-dark"]};
    font-size: 0.8rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.product.purple};
    margin-right: 4px;
  }
`

export const ShoppingCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.product["yellow-light"]};
  padding: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${({theme}) =>  theme.colors.product["yellow-dark"]}
`
