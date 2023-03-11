import { useEffect, useState } from 'react'
import { Card, Header } from '../../components'

import * as S from './styles'

import CoffeeLogo from '../../assets/coffee.svg'

interface Tag {
  uuid: string
  name: string
}

interface Coffee {
  uuid: string
  name: string
  description: string
  tags: Tag[]
  price: number
  image: string
}

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch('http://localhost:5173/coffee')
      const data = await response.json()
      setCoffees(data.coffees)
    })()
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.BannerContainer>
          <S.ParagraphContainer>
            <S.Paragraph type="big">
              Encontre o café perfeito para qualquer hora do dia
            </S.Paragraph>

            <S.Paragraph type="medium">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </S.Paragraph>

            <div>
              <S.Paragraph type="small">Compra simples e segura</S.Paragraph>
              <S.Paragraph type="small">
                Embalagem mantém o café intacto
              </S.Paragraph>
              <S.Paragraph type="small">Entrega rápida e rastreada</S.Paragraph>
              <S.Paragraph type="small">
                O café chega fresquinho até você
              </S.Paragraph>
            </div>
          </S.ParagraphContainer>
          <img src={CoffeeLogo} alt="" />
        </S.BannerContainer>
        <S.GridCoffeeContainer>
          {coffees?.map((coffee) => (
            <Card key={coffee.uuid} coffee={coffee} />
          ))}
        </S.GridCoffeeContainer>
      </S.Container>
    </S.Wrapper>
  )
}
