import { Link } from 'react-router-dom';
import './Header.styled.js';
import {
  Container,
  HeaderStyled,
  TextStyled,
  LinkStyled,
} from './Header.styled.js';

function Header() {
  return (
    <Container>
      <HeaderStyled>
        <LinkStyled to="/">
          <TextStyled>CEP FINDER</TextStyled>
        </LinkStyled>
        <LinkStyled to="/findbycep">
          <TextStyled>ENCONTRAR POR CEP</TextStyled>
        </LinkStyled>
        <LinkStyled to="/findbyaddress">
          <TextStyled>ENCONTRAR POR ENDEREÇO</TextStyled>
        </LinkStyled>
      </HeaderStyled>
    </Container>
  );
}
export default Header;
