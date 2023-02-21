import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 16rem;
  height: 19.8rem;
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`
