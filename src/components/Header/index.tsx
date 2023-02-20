import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from "phosphor-react";
import { Button } from "../Button";
import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.LogoImage src={Logo} />
      <S.WrapperLocationTag>
        <S.LocationTag>
          <MapPin size={22}/>
          <p>Porto Alegre, RS</p>
        </S.LocationTag>
        <Button size="small">
          <ShoppingCart size={22} />
        </Button>
      </S.WrapperLocationTag>
    </S.Container>
  )
}
