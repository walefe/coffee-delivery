import { Header } from "../../components/Header";
import * as S from "./styles";

import CoffeeLogo from '../../assets/coffee.svg'

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.BannerContainer>
        <S.ParagraphContainer>
          <S.Paragraph type="big">
            Encontre o café perfeito para qualquer hora do dia
          </S.Paragraph>

          <S.Paragraph type="medium">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </S.Paragraph>

          <div>
            <S.Paragraph type="small">Compra simples e segura</S.Paragraph>
            <S.Paragraph type="small">Embalagem mantém o café intacto</S.Paragraph>
            <S.Paragraph type="small">Entrega rápida e rastreada</S.Paragraph>
            <S.Paragraph type="small">O café chega fresquinho até você</S.Paragraph>
          </div>
        </S.ParagraphContainer>
        <img src={CoffeeLogo} alt="" />
      </S.BannerContainer>
    </S.Container>
  )
}
