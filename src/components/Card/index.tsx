import * as S from './styles'

interface Tag {
  uuid: string
  name: string
}

interface CardProps {
  coffee: {
    uuid: string
    name: string
    description: string
    tags: Tag[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CardProps) {
  return (
    <S.Container>
      <img src={coffee.image} alt="" />
    </S.Container>
  )
}
