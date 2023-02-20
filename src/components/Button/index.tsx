import { ReactNode } from 'react'
import * as S from './styles'

export interface ButtonProps {
  size: 'small' | 'medium'
  children?: ReactNode,
  color?: string
}

export function Button({ size = 'medium', children }: ButtonProps) {
  return <S.Container size={size} >
   {children}
  </S.Container>
}
