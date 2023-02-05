import { Container, LocationTag, LogoImage, ShoppingCartButton, ShoppingCartIcon, WrapperLocationTag } from "./styles";
import Logo from '../../assets/Logo.png'
import { MapPin } from "phosphor-react";

export function Header() {
  return (
    <Container>
      <LogoImage src={Logo} />
      <WrapperLocationTag>
        <LocationTag>
          <MapPin size={22}/>
          <p>Porto Alegre, RS</p>
        </LocationTag>
        <ShoppingCartButton>
          <ShoppingCartIcon size={22} />
        </ShoppingCartButton>
      </WrapperLocationTag>
    </Container>
  )
}
