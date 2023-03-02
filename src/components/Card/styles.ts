import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16rem;
  height: 19.8rem;
  padding: 0 1.25rem;
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 36px;
  position: relative;
`

export const ImageContainer = styled.div`
  position: absolute;
  top: -30px;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 1.3rem;
  margin-top: 6.5rem;
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors.product['yellow-light']};
  border-radius: 100px;

  p {
    color: ${({ theme }) => theme.colors.product['yellow-dark']};
    font-size: 0.62rem;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 130%;
  }
`

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: 'Baloo 2';
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  span {
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.colors.base.label};
    line-height: 130%;
  }
`

export const Footer = styled.footer`
  display: flex;
`
