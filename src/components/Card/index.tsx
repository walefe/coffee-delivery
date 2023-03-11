import { formatPrice } from '../../utils'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
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
      <S.ImageContainer>
        <img src={coffee.image} alt="" />
      </S.ImageContainer>
      <S.TagContainer>
        {coffee.tags.map((tag) => (
          <S.Tag key={tag.uuid}>
            <p>{tag.name}</p>
          </S.Tag>
        ))}
      </S.TagContainer>

      <S.MainContent>
        <p>{coffee.name}</p>
        <span>{coffee.description}</span>
      </S.MainContent>
      <S.Footer>
        <S.PriceTypography>{formatPrice(coffee.price)}</S.PriceTypography>
        <S.SelectQuantityContainer>
          <S.SelectQuantity>
            <Minus />
            <p>1</p>
            <Plus />
          </S.SelectQuantity>
          <S.CartButton>
            <ShoppingCartSimple size={22} color="#fff" weight="fill" />
          </S.CartButton>
        </S.SelectQuantityContainer>
      </S.Footer>
    </S.Container>
  )
}
