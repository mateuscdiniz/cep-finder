import { Link } from 'react-router-dom';
import {
  Container,
  TextStyled,
  TitleStyled,
  ButtonContainer,
  ButtonStyled,
  LinkStyled,
} from './Home.styled';

function Home() {
  return (
    <Container>
      <TitleStyled>BEM VINDOS AO CEP FINDER</TitleStyled>
      <TextStyled>
        O aplicativo CEP FINDER permite que você encontre códigos de
        endereçamento postais (CEP). Se você ja tiver o CEP em mãos e gostaria
        de buscar seu endereço, o CEP FINDER também vai te ajudar.
      </TextStyled>
      <ButtonContainer>
        <LinkStyled to="/findbycep">
          <ButtonStyled>ENCONTRAR POR CEP</ButtonStyled>
        </LinkStyled>
        <LinkStyled to="/findbyaddress">
          <ButtonStyled>ENCONTRAR POR ENDEREÇO</ButtonStyled>
        </LinkStyled>
      </ButtonContainer>
    </Container>
  );
}
export default Home;
