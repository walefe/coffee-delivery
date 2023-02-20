import styled, { css } from "styled-components";

interface ParagraphProps {
  type: 'small' | 'medium' | 'big'
}

export const Container = styled.div`
  max-width: 90rem;
  height: 100vh;
  margin: 0 auto;
`

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  max-width: 100%;
  height: 34rem;
  padding: 5.8rem 0;
`

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.7rem;
  gap: 1rem;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;

    p + p {
      margin-bottom: 1rem;
    }
  }
`

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ theme }) => theme.colors.base.subtitle};
  ${({ type }) => wrapperModifiers[type]}
  line-break: auto;
`
const wrapperModifiers = {
  small() {
    return css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3rem;
    `
  },
  medium() {
    return css`

      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    `
  },
  big() {
    return css`
      font-family: 'Baloo 2';
      font-size: 3rem;
      line-height: 3.8rem;
      font-weight: 800;

    `
  }
}
